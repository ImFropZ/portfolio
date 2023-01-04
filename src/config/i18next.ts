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
          aboutme: "About Me",
          rupp: "Royal University of Phnom Penh",
          aboutmeDesc: {
            firstHalf: "I’m a student from the",
            lastHalf:
              "also known as RUPP. I had an interest in being a Web Developer. I love seeking new knowledge.",
          },
          livechat: {
            description:
              "The project is about getting a comment or chat on a live-stream video. Login with Facebook and Your account can bind with Gmail. This project uses Facebook API.",
          },
          classmanagement: {
            description:
              "This application builds for managing the student and teachers in the education system. The main priority of this app is for easing CRUD (Create, Read, Update, Delete) on the data of the user.",
          },
          ecommerce: {
            description:
              "This E-Commerce website is for selling products online with authenticated users via Email, Facebook, or Google.",
          },
        },
      },
      kh: {
        translation: {
          flag: CambodiaFlag,
          name: "លីម​ តាំងម៉េង",
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
          aboutme: "អំពីខ្ញុំ",
          rupp: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
          aboutmeDesc: {
            firstHalf: "ខ្ញុំគឺជានិសិត្សនៅក្នុង",
            lastHalf:
              "ដែលហៅកាត់ថា RUPP.ហើយខ្ញុំមានចំណាប់អារម្មណ៍ទៅលើការធ្វើជា Web Developer.ខ្ញុំចូលចិត្តស្វែងរកចំណេះដឹងថ្មីៗ.",
          },
          livechat: {
            description:
              "គម្រោងនេះធ្វើឡើងសម្រាប់ទទួលយក​ comment ឬ chat ចេញពីវីដេអូផ្សាយផ្ទាល់។ហើយអាចអ្នកចូលប្រើប្រាស់បាន ជាមួយគណនី Facebook របស់លោកអ្នក ហើយអាចភ្ជាប់ជាមួយគណនី Gmail បានទៀតផង។គម្រោងនេះគឺប្រើប្រាស់នូវ Facebook API។",
          },
          classmanagement: {
            description:
              "កម្មវិធីនេះបង្កើតឡើងសម្រាប់គ្រប់គ្រងសិស្ស និងគ្រូបង្រៀននៅក្នុងប្រព័ន្ធអប់រំ។ អាទិភាពចម្បងនៃកម្មវិធីនេះគឺសម្រាប់ការ CRUD (Create, Read, Update, Delete) នៅលើទិន្នន័យរបស់អ្នកប្រើ។",
          },
          ecommerce: {
            description:
              "គេហទំព័រ E-Commerce នេះគឺសម្រាប់លក់ផលិតផលអនឡាញ ជាមួយនឹងអ្នកប្រើប្រាស់ ដែលមានការផ្ទៀងផ្ទាត់តាមរយៈអ៊ីម៉ែល, Facebook ឬ Google ។",
          },
        },
      },
    },
  });
