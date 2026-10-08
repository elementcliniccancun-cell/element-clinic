import { media } from "@/content/media";
import Section from "./Section";

function Player({ url, title }: { url: string; title: string }) {
  const isFile = /\.(mp4|webm|mov)$/i.test(url);
  if (isFile) return <video src={url} controls playsInline className="h-full w-full object-cover" title={title} />;
  return <iframe src={url} title={title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />;
}

export default function Videos() {
  if (media.videos.length === 0) return null;
  return (
    <Section dark>
      <h2 className="text-4xl md:text-5xl">Dentro de Element</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {media.videos.map((v, i) => (
          <figure key={i}>
            <div className="aspect-video overflow-hidden rounded-xl bg-black"><Player url={v.url} title={v.title} /></div>
            <figcaption className="mt-3 text-[15px] text-cream/70">{v.title}{v.caption ? ` · ${v.caption}` : ""}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
