export const VERSION = "0.2.0";

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

export const navigation: NavGroup[] = [
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
      { title: "Arrays", href: "/docs/language/arrays" },
      { title: "Objects", href: "/docs/language/objects" },
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
