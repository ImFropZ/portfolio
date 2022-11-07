import liveChat from "../asset/project/live_chat";
import classManagement from "../asset/project/class_management";

export const project = [
  {
    id: "livechat",
    name: "Live-Chat Facebook",
    image: [liveChat.dashboard, liveChat.guide, liveChat.login],
    language: ["JavaScript", "HTML", "CSS", "SQL"],
    other: ["ReactJS", "ExpressJS", "NodeJS", "WAMP", "KnexJS", "JWT", "SCSS"],
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
];
