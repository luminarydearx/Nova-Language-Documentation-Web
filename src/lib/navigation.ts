export const VERSION = "0.4.0";

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  icon: string;
  items: NavItem[];
}

const rawNavigation: NavGroup[] = [
  {
    title: "Introduction",
    icon: "✦",
    items: [
      { title: "What is Nova?", href: "/docs" },
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "CLI Reference", href: "/docs/cli" },
    ],
  },
  {
    title: "Language",
    icon: "◈",
    items: [
      { title: "Variables", href: "/docs/language/variables" },
      { title: "Operators", href: "/docs/language/operators" },
      { title: "Control Flow", href: "/docs/language/control-flow" },
      { title: "Functions", href: "/docs/language/functions" },
      { title: "OOP (Classes & Interfaces)", href: "/docs/language/oop" },
      { title: "Structs & Enums", href: "/docs/language/data-structures" },
      { title: "Exception Handling", href: "/docs/language/error-handling" },
      {
        title: "Concurrency (Async/Await)",
        href: "/docs/language/async-await",
      },
      { title: "Arrays & Objects", href: "/docs/language/arrays" },
    ],
  },
  {
    title: "Resources",
    icon: "◎",
    items: [
      { title: "Examples", href: "/docs/examples" },
      { title: "About Nova", href: "/docs/about" },
    ],
  },
];

export const navigation: NavGroup[] = rawNavigation.map((group) => ({
  ...group,
  items: group.items.map((item) => {
    const normalizedBadge = item.badge?.trim().toLowerCase();

    // If badge is "new" or empty string, return as is (no coming-soon logic)
    if (!normalizedBadge || normalizedBadge === "new") {
      return item;
    }

    // Handle "Coming Soon" variations
    if (normalizedBadge === "coming soon" || normalizedBadge === "soon") {
      return {
        ...item,
        href: `/docs/coming-soon?feature=${encodeURIComponent(item.title)}`,
        badge: "Coming Soon",
      };
    }
    return item;
  }),
}));
