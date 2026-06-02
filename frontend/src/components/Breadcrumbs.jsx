import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * Reusable Breadcrumbs for ITcrista infoX.
 *
 * Usage A — auto from URL:
 *   <Breadcrumbs />
 *
 * Usage B — manual override:
 *   <Breadcrumbs
 *     items={[
 *       { label: "Services", to: "/services" },
 *       { label: "Custom Website Development" },
 *     ]}
 *   />
 *
 * Props:
 *  - items?: Array<{ label: string, to?: string }>   manual trail (last one is current page)
 *  - homeLabel?: string                              default "Home"
 *  - homeTo?: string                                 default "/"
 *  - showHome?: boolean                              default true
 *  - className?: string                              extra wrapper classes
 *  - labelMap?: Record<string, string>               override segment → label, e.g. { "ui-ux-design": "UI / UX Design" }
 */
export default function Breadcrumbs({
  items,
  homeLabel = "Home",
  homeTo = "/",
  showHome = true,
  className = "",
  labelMap = {},
}) {
  const { pathname } = useLocation();

  const trail = useMemo(() => {
    if (items && items.length) return items;
    // Auto-build from URL
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((seg, i) => {
      const to = "/" + segments.slice(0, i + 1).join("/");
      const isLast = i === segments.length - 1;
      const label = labelMap[seg] || prettify(seg);
      return { label, to: isLast ? undefined : to };
    });
  }, [items, pathname, labelMap]);

  const all = useMemo(() => {
    const base = showHome ? [{ label: homeLabel, to: homeTo, isHome: true }] : [];
    return [...base, ...trail];
  }, [showHome, homeLabel, homeTo, trail]);

  // SEO-friendly JSON-LD breadcrumb
  const ldJson = useMemo(() => {
    const list = all
      .filter((c) => c.label)
      .map((c, i) => {
        const node = {
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
        };
        if (c.to) node.item = c.to;
        return node;
      });
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: list,
    });
  }, [all]);

  if (all.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      data-testid="breadcrumbs"
      className={`relative ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm">
        {all.map((c, i) => {
          const isLast = i === all.length - 1;
          const key = `${c.label}-${i}`;
          return (
            <li
              key={key}
              className="inline-flex items-center gap-2 min-w-0"
              data-testid={`breadcrumb-item-${i}`}
            >
              {i > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-white/30 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              {c.to && !isLast ? (
                <Link
                  to={c.to}
                  data-testid={`breadcrumb-link-${slugify(c.label)}`}
                  className="inline-flex items-center gap-1.5 text-white/55 hover:text-[#06B6D4] transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  {c.isHome && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  <span>{c.label}</span>
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  data-testid={`breadcrumb-current-${slugify(c.label)}`}
                  className="inline-flex items-center gap-1.5 text-white font-medium truncate max-w-[220px] sm:max-w-none"
                >
                  {c.isHome && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  <span>{c.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* SEO structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: ldJson }}
      />
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*                              Helpers                                */
/* ------------------------------------------------------------------ */
function prettify(seg = "") {
  return decodeURIComponent(seg)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugify(s = "") {
  return s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}
