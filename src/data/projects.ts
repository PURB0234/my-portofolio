export type Project = {
  title: string;
  description: string;
  link: string;
  tech: string[];
  demo?: "netflix";
};

export const projects: Project[] = [
  {
    title: "Clone UI Netflix",
    description:
      "Aplikasi mobile clone tampilan Netflix menggunakan Flutter. Menampilkan home screen dengan SliverAppBar, thumbnail hero, popular movies, top rated, trending, dan bottom navigation.",
    link: "https://github.com/PURB0234/clone-ui-netflix",
    tech: ["Flutter", "Dart", "TMDB API"],
    demo: "netflix",
  },
  // {
  //   title: "Portfolio Website",
  //   description: "Website portfolio menggunakan Next.js, Tailwind, dan SCSS.",
  //   link: "https://github.com/username/portfolio",
  //   tech: ["Next.js", "Tailwind", "SCSS"],
  // },
  {
    title: "React Native App To-do List",
    description:
      "Aplikasi mobile untuk manajemen tugas menggunakan mamang react.",
    link: "https://github.com/PURB0234/Aplikasi_TodoList.git",
    tech: ["React Native", "JavaScript"],
  },
  // {
  //   title: "API Service",
  //   description:
  //     "REST API untuk aplikasi internal dengan Node.js & Express.",
  //   link: "https://github.com/username/api-service",
  //   tech: ["Node.js", "Express"],
  // },
];
