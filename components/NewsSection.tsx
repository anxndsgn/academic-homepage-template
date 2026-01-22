import React from "react";
import Link from "next/link";
import { formatDate, getNews } from "@/app/news/utils";

export default function NewsSection() {
  const newsItems = getNews().sort((a, b) => {
    return new Date(b.metadata.date || '').getTime() - new Date(a.metadata.date || '').getTime();
  });

  return (
    <section className="grid gap-5 transition-all h-auto">
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {newsItems.map((item, index) => (
          <li key={item.slug} className="list-disc">
            <Link
              href={`/news/${item.slug}`}
              className={`flex justify-between ${
                index === 0
                  ? "pt-0 pb-3"
                  : index === newsItems.length - 1
                  ? "pt-3 pb-0"
                  : "py-3"
              }`}
            >
              <p className="hover:underline">{item.metadata.title}</p>
              <p className="text-neutral-500">
                {formatDate(item.metadata.date || '')}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
