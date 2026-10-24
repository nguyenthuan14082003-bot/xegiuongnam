import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/dr2.png"
            alt="Logo Phương Đông SQ"
            width={80}
            height={80}
            className="h-20 w-20 rounded-full bg-white object-contain p-1"
          />

          <p className="mt-4 font-bold">{SITE.name}</p>
          <p className="mt-1 text-sm opacity-80">{SITE.slogan}.</p>
        </div>

        <div>
          <h2 className="text-base font-bold">Liên hệ</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {SITE.address}
            </li>

            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="flex gap-2 font-semibold hover:text-sun"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {p.display}
                </a>
              </li>
            ))}

            <li className="flex gap-4 pt-1">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Facebook
              </a>
              <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Zalo
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">Dịch vụ</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/dich-vu/$slug"
                  params={{ slug: s.slug }}
                  className="opacity-90 hover:text-sun"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/tour-du-lich" className="opacity-90 hover:text-sun">
                Xe phục vụ tour du lịch
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">Điều hướng</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="opacity-90 hover:text-sun">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-75">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}