import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  date,
  img,
  slug,
  id,
}) {
  return (
    <Link href={`projects/${slug}`} className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-neutral-200 dark:border-neutral-700 border w-full md:h-52 rounded-xl bg-white dark:bg-neutral-800 hover:shadow-xs overflow-hidden">
        <div className="p-6 flex flex-col justify-between ">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 font-light line-clamp-3 min-h-[72px]">
              {description}
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300">{date}</p>
        </div>
        <Image
          src={img}
          width={200}
          height={200}
          alt="project image"
          className="w-full h-full object-cover row-start-1 md:row-auto md:col-start-2 md:col-end-3"
        />
      </div>
    </Link>
  );
}
