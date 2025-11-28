import { MediumArticleItem } from "./Blog";

type BlogArticleProps = Partial<MediumArticleItem>;

export default function BlogArticle({
  // guid,
  title,
  content,
  pubDate,
  link,
}: BlogArticleProps) {
  const parseDate = (date: string) => date.split(" ").at(0);

  return (
    <li className="p-4 rounded-2xl border border-gray-200">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{parseDate(pubDate)}</p>
      <p
        className="line-clamp-3 overflow-hidden text-ellipsis"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <a
        className="font-semibold text-blue-700 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
        href={link}
        title="Read full post on Medium"
      >
        Read more
      </a>
    </li>
  );
}
