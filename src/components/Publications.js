import bibtexParse from "bibtex-parse-js";

export default function Publications({ bibtex }) {
  const parsed = bibtexParse.toJSON(bibtex);

  return (
    <ol className="flex flex-col gap-4">
      {parsed.map((item) => {
        return (
          <li
            key={item.entryTags.title}
            className=" gap-1 list-outside list-decimal"
          >
            <h2 className="text-base font-medium dark:text-neutral-50">
              {item.entryTags.url ? (
                <a href={item.entryTags.url} className="underline">
                  {item.entryTags.title.replace(/{|}/g, "")}
                </a>
              ) : (
                item.entryTags.title.replace(/{|}/g, "")
              )}
            </h2>
            <div className=" font-light text-neutral-600 dark:text-neutral-300">
              <p>{item.entryTags.author}</p>

              <span className=" pr-2 italic font-normal">
                {item.entryTags.journal?.replace(/{|}/g, "") ||
                  item.entryTags.booktitle?.replace(/{|}/g, "")}
              </span>
              <span className="pr-2">{item.entryTags.year}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
