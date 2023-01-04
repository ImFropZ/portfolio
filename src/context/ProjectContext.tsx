import React, { createContext, useContext } from "react";

import liveChat from "../asset/project/live_chat";
import classManagement from "../asset/project/class_management";
import ecommerce from "../asset/project/e_commerce";

export const project = [
  {
    id: "livechat",
    name: "Live-Chat Facebook",
    image: [liveChat.dashboard, liveChat.guide, liveChat.login],
    language: ["JavaScript", "HTML", "CSS", "SQL"],
    other: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "WAMP",
      "KnexJS",
      "JWT",
      "SCSS",
      "Authentication",
    ],
  },
  {
    id: "classmanagement",
    name: "Class Management",
    image: [
      classManagement.login,
      classManagement.classroom,
      classManagement.course,
      classManagement.edit,
    ],
    language: ["TypeScript", "HTML", "CSS"],
    other: ["ReactJS", "NodeJS", "DnD kit", "ChartJS", "SCSS"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    image: [
      ecommerce.home,
      ecommerce.login,
      ecommerce.product,
      ecommerce.category,
      ecommerce.cart,
    ],
    language: ["TypeScript", "HTML"],
    other: [
      "TailwindCSS",
      "ReactJS",
      "Firebase",
      "Authentication",
      "Facebook Login",
      "Google Login",
      "Payment",
    ],
  },
];

interface Project {
  id: string;
  name: string;
  image: string[];
  language: string[];
  other: string[];
}

const projectContext = createContext<Array<Project>>([]);

export const useProjectContext = () => {
  return useContext(projectContext);
};

export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <projectContext.Provider value={project}>{children}</projectContext.Provider>
  );
};
