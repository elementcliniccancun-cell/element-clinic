"use client";
import { useEffect, useRef } from "react";

// Embed oficial de Cal.com (inline). Ajusta su altura solo y usa el color de marca.
export default function CalEmbed({ calLink }: { calLink: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = window as any;
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal; const ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(w, "https://app.cal.com/embed/embed.js", "init");
    w.Cal("init", "valoracion", { origin: "https://cal.com" });
    w.Cal.ns.valoracion("inline", { elementOrSelector: ref.current, calLink, layout: "month_view", config: { theme: "light" } });
    w.Cal.ns.valoracion("ui", { theme: "light", styles: { branding: { brandColor: "#8E5F4C" } }, hideEventTypeDetails: false, layout: "month_view" });
  }, [calLink]);
  return <div ref={ref} className="min-h-[640px] w-full overflow-hidden rounded-2xl border border-hairline bg-white" />;
}
