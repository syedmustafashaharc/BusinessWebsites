import { NextRequest, NextResponse } from "next/server";

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 10;
const TIME_WINDOW = 3600000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissions.get(ip) || [];

  const recentSubmissions = userSubmissions.filter(
    (timestamp) => now - timestamp < TIME_WINDOW
  );

  if (recentSubmissions.length >= RATE_LIMIT) {
    return false;
  }

  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-client-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Mailchimp Integration (Optional - for production)
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID) {
      try {
        const response = await fetch(
          `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            },
            body: JSON.stringify({
              email_address: email,
              status: "pending", // Requires double opt-in
            }),
          }
        );

        if (!response.ok) {
          const error = await response.json();
          console.error("Mailchimp error:", error);

          // Don't expose Mailchimp errors to client
          if (error.status === 400 && error.title === "Member Exists") {
            return NextResponse.json(
              {
                success: true,
                message: "You're already subscribed!",
                alreadySubscribed: true,
              }
            );
          }
        }
      } catch (error) {
        console.error("Mailchimp integration error:", error);
        // Continue even if Mailchimp fails - log locally instead
      }
    }

    // Log the subscription locally as backup
    console.log("Newsletter subscription:", { email, timestamp: new Date() });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
