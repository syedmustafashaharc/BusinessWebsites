export const blogs = [
  {
    slug: "best-cuts-for-steak",
    title: "Which Cuts Make the Perfect Steak?",
    summary:
      "Ribeye, sirloin, T-bone, fillet — each cut delivers a different experience. Here's what to choose and why.",
    date: "20 May 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1690983321402-35ff91692b56?w=800&h=400&fit=crop",
    sections: [
      {
        cut: "Ribeye",
        tag: "Best for Flavour",
        tagColor: "bg-orange-500",
        body: "Cut from ribs 6–12, the ribeye carries heavy marbling that melts as it cooks, basting the meat from the inside. The result is deeply flavourful and juicy. Best cooked on a screaming-hot cast-iron or grill. Medium-rare to medium is ideal — go beyond and you lose what makes it special.",
      },
      {
        cut: "Sirloin",
        tag: "Best Value",
        tagColor: "bg-amber-600",
        body: "A versatile, leaner steak with a firmer texture than ribeye and excellent beefy flavour without being overly rich. Works well pan-fried with butter, garlic, and thyme. Cook to medium-rare, rest for 5 minutes, and slice against the grain for maximum tenderness.",
      },
      {
        cut: "Fillet (Tenderloin)",
        tag: "Most Tender",
        tagColor: "bg-red-600",
        body: "The least-worked muscle in the animal, making it the most tender cut. Lower in fat than ribeye, so the flavour is more delicate. Often wrapped in pastry (Beef Wellington) or served with a rich sauce. Do not cook beyond medium — it dries out quickly without the fat to protect it.",
      },
      {
        cut: "T-Bone",
        tag: "Best for Two",
        tagColor: "bg-rose-600",
        body: "A T-shaped bone divides the sirloin and tenderloin in one impressive cut. You get two different textures and flavour profiles in a single steak. The bone conducts heat, so cook slightly longer than you'd expect, and carve the meat away from the bone to serve cleanly.",
      },
      {
        cut: "Rump",
        tag: "Most Affordable",
        tagColor: "bg-yellow-600",
        body: "Often underrated, rump has bold beefy flavour and a satisfying chew. Benefits from a marinade or simply careful cooking. Always slice against the grain after resting — this breaks the muscle fibres and makes a firmer cut feel significantly more tender. Excellent value.",
      },
    ],
    tip: "Regardless of cut, always rest your steak for at least half the cooking time before slicing. This lets juices redistribute throughout the meat instead of pouring onto your plate the moment you cut.",
  },
  {
    slug: "best-cuts-for-stew-and-soup",
    title: "The Best Cuts for Stews, Soups & Slow Cooking",
    summary:
      "Low and slow transforms tough, collagen-rich cuts into something extraordinary. Here's what to buy and exactly why it works.",
    date: "28 May 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1600180786608-28d06391d25c?w=800&h=400&fit=crop",
    sections: [
      {
        cut: "Brisket",
        tag: "Best for Braise & BBQ",
        tagColor: "bg-orange-500",
        body: "From the lower chest, brisket is laced with connective tissue and collagen. Cooked low and slow — 3–5 hours at 150°C in the oven or 10+ hours in a smoker — that collagen converts to gelatin, creating an incredibly rich, silky texture. Classic for Texas BBQ, Jewish braised brisket, and salt beef.",
      },
      {
        cut: "Chuck (Shoulder)",
        tag: "Best All-Rounder",
        tagColor: "bg-amber-600",
        body: "The butcher's go-to for stew. Cut from the shoulder, chuck has well-distributed marbling and connective tissue that breaks down beautifully. It holds its shape in chunks while becoming fork-tender after 2–3 hours of braising. This is what our Organic Beef Stew Meat is cut from.",
      },
      {
        cut: "Shin (Shank)",
        tag: "Best for Broth",
        tagColor: "bg-red-600",
        body: "Beef shin is loaded with collagen that dissolves into stew or broth as it cooks, giving it a naturally thick, glossy consistency — no flour or thickener needed. The meat shreds beautifully. Perfect for Italian osso buco (cross-cut shank), French pot-au-feu, or a classic bone broth.",
      },
      {
        cut: "Short Rib",
        tag: "Most Indulgent",
        tagColor: "bg-rose-600",
        body: "Short ribs include the rib bone, which adds deep flavour to any braising liquid. After 3–4 hours in the oven with wine, stock, and aromatics, the meat falls away from the bone in rich, unctuous pieces. A restaurant favourite that's surprisingly straightforward to cook at home.",
      },
      {
        cut: "Oxtail",
        tag: "Best for Deep Stock",
        tagColor: "bg-yellow-600",
        body: "Oxtail sections are rich in bone, marrow, and collagen. Slow-braised or simmered for 3–4 hours, they yield a deeply flavoured, gelatinous broth and intensely rich meat that clings to the bone. Classic in Caribbean oxtail stew, Italian coda alla vaccinara, and Korean gomtang.",
      },
    ],
    tip: "Always brown your meat in batches before adding liquid. A proper sear creates a flavour-rich crust through the Maillard reaction that deepens the entire dish. Crowding the pan causes steaming — you want the sizzle, not the steam.",
  },
];

export type Blog = (typeof blogs)[number];
