import Link from "next/link";
import Image from "next/image";
import AboutMd from "@/data/home/About.mdx";
import { personalInfo } from "@/website.config";
import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "@remixicon/react";
import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {personalInfo.profilePicture && (
          <Image
            src={personalInfo.profilePicture}
            alt="profile image"
            width={120}
            height={120}
            className="md:hidden sm:block object-cover aspect-square"
          ></Image>
        )}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">{personalInfo.name}</h1>
          <h2 className="text-xl font-medium">
            {personalInfo.role}{" "}
            <a
              href={personalInfo.universityWebsite}
              className="hover:underline"
            >
              @{personalInfo.university}
            </a>
          </h2>
          <div className="flex gap-3 text-neutral-600 hover:text-neutral-900">
            {personalInfo.socialMedia.map((social) => {
              return (
                <Button asChild variant="outline" key={social.name} size={"sm"}>
                  <Link href={social.url} target="_blank">
                    {social.name === "Email" ? (
                      <RiMailLine size={16} />
                    ) : social.name === "GitHub" ? (
                      <RiGithubFill size={16} />
                    ) : social.name === "Twitter" ? (
                      <RiTwitterXLine size={16} />
                    ) : (
                      <RiLinkedinBoxFill size={16} />
                    )}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        {personalInfo.profilePicture && (
          <Image
            src={personalInfo.profilePicture}
            alt="profile image"
            width={120}
            height={120}
            className="hidden md:block object-cover aspect-square"
          ></Image>
        )}
      </div>
      <article className="flex flex-col gap-2">
        <AboutMd />
      </article>
    </section>
  );
}
