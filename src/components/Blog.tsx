"use client";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { basic } from "_data/jihoBok";
import BlogArticle from "./BlogArticle";

export interface MediumArticleItem {
  guid: string;
  title: string;
  content: string;
  pubDate: string;
  link: string;
}

export default function Blog() {
  const [items, setItems] = useState<MediumArticleItem[]>([]);
  const displayContents = useMemo(() => items.slice(0, 3), [items]);

  useEffect(() => {
    const blogLink = "https://medium.com/feed/@bokjiho";
    const mediumArticle = `https://api.rss2json.com/v1/api.json?rss_url=${blogLink}`;

    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(mediumArticle);
        const json = await response.json();
        // console.log(json, "<<<<< MEDIUM");

        if (json.status !== "ok") {
          throw Error(json);
        }

        setItems(json?.items);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch blog articles");
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <section id="blogs-section" className="mt-6">
      <h2 className="text-2xl font-bold py-1.5">Recent Blog Posts</h2>
      <ul className="grid grid-cols-1 gap-4">
        {displayContents.map((item) => (
          <BlogArticle key={item.guid} {...item} />
        ))}
      </ul>
      {items.length < 1 && (
        <div>
          👉 Check out{" "}
          <a
            href={basic.techBlog}
            target="_blank"
            className="underline  text-blue-700 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
        </div>
      )}
    </section>
  );
}
