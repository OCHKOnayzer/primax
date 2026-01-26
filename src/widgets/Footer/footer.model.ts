import type { FooterSectionType } from "./types";

export const footerSection: FooterSectionType[] = [
  {
    title: "Покупателям",
    links: [
      { label: "Как совершить покупку", link: "/info" },
      { label: "Достака", link: "/info" },
      { label: "Есть ли рассрочка", link: "/info" },
      { label: "Возврат", link: "/info" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", link: "/info" },
      { label: "Где мы офлайн", link: "/info" },
      { label: "Контакты", link: "/info" },
      { label: "Реквезиты", link: "/info" },
    ],
  },
  {
    title: "Наши соц.сети",
    links: [
      { label: "Telegram", link: "/info" },
      { label: "Группа ВКонтакте", link: "/info" },
      { label: "YouTube", link: "/info" },
      { label: "Instagram", link: "/info" },
    ],
  },
];
