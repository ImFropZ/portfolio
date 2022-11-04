import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { CambodiaFlag, USFlag } from "../asset";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          flag: USFlag,
          name: "Lim Tangmeng",
          phoneNumber: "Phone",
          address: "Address",
          skill: "Skill",
          education: "Education",
          bachelor: "Bachelor's Degree",
          houseNumber: "No.",
          district: "District",
          khan: "Khan",
          city: "Capital",
          prekEng: "Prek Eng",
          chbarAmpov: "Chbar Ampov",
          phnomPenh: "Phnom Penh",
          workExperience: "Work experience",
          seeMore: "See more",
          description: "Description",
          language: "Language",
          other: "Other",
          livechat: {
            description:
              "The project is about getting a comment or chat on a live-stream video. Login with Facebook and Your account can bind with Gmail. This project uses Facebook API.",
          },
        },
      },
      kh: {
        translation: {
          flag: CambodiaFlag,
          name: "លីម​ តាំងម៉េង",
          phoneNumber: "លេខទូរស័ព្ទ",
          address: "អាស័យដ្ឋាន",
          skill: "ជំនាញ",
          education: "ការអប់រំ",
          bachelor: "បរិញ្ញាប័ត្រ",
          houseNumber: "​ផ្ទះលេខ",
          district: "សង្កាត់",
          khan: "ខណ្ឌ",
          city: "ក្រុង",
          prekEng: "ព្រែកឯង",
          chbarAmpov: "ច្បារអំពៅ",
          phnomPenh: "ភ្នំពេញ",
          workExperience: "បទពិសោធន៍​ការងារ",
          seeMore: "មើល​បន្ថែម​",
          description: "ការពិពណ៌នា",
          language: "ភាសា",
          other: "ផ្សេងទៀត",
          livechat: {
            description:
              "គម្រោងនេះធ្វើឡើងសម្រាប់ទទួលយក​ comment ឬ chat ចេញពីវីដេអូផ្សាយផ្ទាល់។ហើយអាចអ្នកចូលប្រើប្រាស់បាន ជាមួយគណនី Facebook របស់លោកអ្នក ហើយអាចភ្ជាប់ជាមួយគណនី Gmail បានទៀតផង។គម្រោងនេះគឺប្រើប្រាស់នូវ Facebook API។",
          },
        },
      },
    },
  });
