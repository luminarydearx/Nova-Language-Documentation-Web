"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-full overflow-y-auto py-6 px-3">
      {navigation.map((group) => (
        <div key={group.title} className="mb-6">
          {/* Group header */}
          <div className="flex items-center gap-2 px-3 mb-2">
            <span className="text-nova-cyan text-xs">{group.icon}</span>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-nova-dim">
              {group.title}
            </span>
          </div>

          {/* Links */}
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/docs" &&
                  pathname.startsWith(item.href.split("#")[0]) &&
                  item.href.includes("#") === false &&
                  !pathname.includes(
                    item.href.split("/docs/")[1]?.split("/")[1] ?? "___",
                  ));
              const exactActive = pathname === item.href.split("#")[0];

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`sidebar-link flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-all ${
                      exactActive
                        ? "text-nova-cyan bg-nova-cyan/10 border-l-2 border-nova-cyan ml-[-2px] font-medium"
                        : "text-nova-dim hover:text-nova-white hover:bg-nova-border/40"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-nova-cyan/10 text-nova-cyan border border-nova-cyan/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Bottom meta */}
      <div className="mt-auto pt-6 border-t border-nova-border px-3">
        <div className="text-[11px] font-mono text-nova-border space-y-1">
          <div className="flex justify-between">
            <span>version</span>
            <span className="text-nova-cyan">0.2.0</span>
          </div>
          <div className="flex justify-between">
            <span>phase</span>
            <span className="text-nova-purple">1</span>
          </div>
          <div className="flex justify-between">
            <span>by</span>
            <span className="text-nova-white">Luminar</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
