import React from "react";
import { formatDate, getNews } from "@/app/news/utils";
import Link from "next/link";

export default function LatestNewsSection() {
  const newsItems = getNews().sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  return (
    <section className="grid gap-5 transition-all h-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Latest News</h1>
        <Link href="/news" className="text-neutral-500 hover:underline">
          View all
        </Link>
      </div>
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {newsItems.slice(0, 3).map((item, index) => (
          <li key={item.slug}>
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
                {formatDate(item.metadata.date)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
