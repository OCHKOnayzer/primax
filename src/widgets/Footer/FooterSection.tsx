import React from "react";
import Link from "next/link";

import type { LinkType } from "./types";

interface Props {
  title: string;
  link: LinkType[];
}

export const FooterSection = ({ title, link }: Props) => {
  return (
    <section className="flex flex-col relative gap-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="flex flex-col gap-sm">
        {link.map((item) => (
          <div key={item.label} className="text-lg">
            <Link href={item.link}>{item.label}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};
