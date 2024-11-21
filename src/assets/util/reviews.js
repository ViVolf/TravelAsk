import avatar from "../images/avatar.png";
import galeryImg1 from "../images/galery_img1.png";
import galeryImg2 from "../images/galery_img2.png";
import galeryImg3 from "../images/galery_img3.png";
import galeryImg4 from "../images/galery_img4.png";
import galeryImg5 from "../images/galery_img5.png";
import galeryImg6 from "../images/galery_img6.png";
import galeryImg7 from "../images/galery_img7.png";
import galeryImg8 from "../images/galery_img8.png";
import galeryImg9 from "../images/galery_img9.png";

export const reviews = [
    {
        id: 1,
        avatar: avatar,
        name: "Константинов Михаил",
        city: "БАРСЕЛОНА",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу. ",
        galery: [galeryImg1, galeryImg2, galeryImg3, galeryImg4, galeryImg5, galeryImg6],
        info: {
            date: "около 1 года назад",
            comment: 3,
            like: 3
        }
    },
    {
        id: 2,
        avatar: avatar,
        name: "Иван Иванов",
        city: "БАРСЕЛОНА",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
        galery: [galeryImg9, galeryImg5, galeryImg1, galeryImg8, galeryImg2],
        info: {
            date: "5 месяцев назад",
            comment: 5,
            like: 4
        }
    },
    {
        id: 3,
        avatar: avatar,
        name: "Артем Корнилов",
        city: "БАРСЕЛОНА",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
        galery: [galeryImg7, galeryImg2, galeryImg4, galeryImg1],
        info: {
            date: "неделю назад",
            comment: 8,
            like: 2
        }
    },
    {
        id: 4,
        avatar: avatar,
        name: "Иван Крузенштерн",
        city: "БАРСЕЛОНА",
        text: "Путешествия позволяют познакомиться с разными культурами, создают яркие воспоминания. Увидеть мир с новой перспективы – бесценно.",
        galery: [galeryImg1, galeryImg2],
        info: {
            date: "назад в будущее",
            comment: 9,
            like: 7
        }
    },
    {
        id: 5,
        avatar: avatar,
        name: "Фридрих Ницше",
        city: "БАРСЕЛОНА",
        text: "Забота о психическом здоровье важна как о физическом. Медитация, йога, осознанность помогают справиться со стрессом. Дайте разуму время для отдыха!",
        galery: [],
        info: {
            date: "150 лет назад",
            comment: 2,
            like: 1
        }
    }
];