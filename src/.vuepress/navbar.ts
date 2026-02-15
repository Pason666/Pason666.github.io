import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Animation",
        icon: "video",
        prefix: "animation/",
        link: "animation/README.md",
      },
      {
        text: "Book",
        icon: "book",
        prefix: "book/",
        link: "book/README.md",
        // children: [
        //   { text: "安德的游戏", icon: "book", link: "Ender's_game" },
        // ],
      },
      {
        text: "Diary",
        icon: "book-open",
        prefix: "diary/",
        link: "diary/README.md",
        // children: [
        //   {
        //     text: "Diary 1",
        //     icon: "book-open",
        //     link: "Diary 1",
        //   },
        // ],
      },
      {
        text: "Game",
        icon: "gamepad",
        prefix: "game/",
        link: "game/README.md",
        // children: [
        //   {
        //     text: "Game 1",
        //     icon: "gamepad",
        //     link: "Game 1",
        //   },
        // ],
      },
      {
        text: "Movie",
        icon: "film",
        prefix: "movie/",
        link: "movie/README.md",
        // children: [
        //   {
        //     text: "Movie 1",
        //     icon: "film",
        //     link: "Movie 1",
        //   },
        // ],
      },
      // { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
    ],
  },
  "/prompt/",
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
