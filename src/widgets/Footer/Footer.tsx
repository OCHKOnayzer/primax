"use client";

import React from "react";
import { footerSection } from "./footer.model";
import { FooterSection } from "./FooterSection";

export const Footer = () => {
  return (
    <footer className="relative flex justify-center bg-custom-gradient align-baseline before:content-[''] before:block before:w-full before:h-6 before:rounded-b-[24px] before:bg-white before:absolute before:top-0 before:left-0 pt-8">
      <div className="flex items-center justify-center gap-md w-[70%] h-fit m-[6px] text-white">
        {footerSection.map((item) => (
          <FooterSection
            key={item.title}
            title={item.title}
            link={item.links}
          />
        ))}
      </div>
    </footer>
  );
};
