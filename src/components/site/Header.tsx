import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { NAV, SITE } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-2">
        <Link to="/" className="flex items-center gap-3" aria-label="Phương Đông SQ - Trang chủ">
          <img src="/dr2.png" alt="Logo Phương Đông SQ" width={56} height={56} className="h-14 w-14" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-primary-deep">Vận tải & Du lịch</span>
            <span className="block text-lg font-extrabold text-primary">Phương Đông SQ</span>
          </span>
        </Link>

        <nav aria-label="Menu chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden flex-col rounded-xl bg-primary-deep px-4 py-1.5 text-primary-foreground md:flex">
            {SITE.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-1.5 text-sm font-bold hover:text-sun">
                <Phone className="h-3.5 w-3.5" aria-hidden /> {p.display}
              </a>
            ))}
          </div>
          <a href={`tel:${SITE.phones[0].tel}`} className="rounded-full bg-primary p-3 text-primary-foreground md:hidden" aria-label={`Gọi ${SITE.phones[0].display}`}>
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="rounded-lg p-2.5 text-foreground hover:bg-secondary lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Menu di động" className="border-t bg-background lg:hidden">
          <ul className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-2 px-3 py-3 font-bold text-primary">
                  <Phone className="h-4 w-4" aria-hidden /> {p.display}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
