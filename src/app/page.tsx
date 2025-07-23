import Avatars from "@/components/Avatars/Avatars";
import ButtonCV from "@/components/button/downloadcv/Button";
import Button from "@/components/button/getintouch/Button";
import Navbar from "@/components/Navbar/Navbar";
import Laravel from "@/components/Skills/Laravel/Laravel";
import NextJS from "@/components/Skills/NextJS/NextJS";
import Description from "@/components/Teks/description/Description";
import Teks from "@/components/Teks/Teks";
import React from "@/components/Skills/React/React";
import FlutterR from "@/components/Skills/FlutterR/FlutterR";
import Github from "@/components/Skills/GithubB/Github";
import ProjectList from "@/components/ProjectList/ProjectList";
import Experience from "@/components/ExperienceList/Experience";
import Cntk from "@/components/Contact/cntk";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="h-full pt-20">
        {/* <h1 className="text-4xl font-bold">Home Section</h1> */}
        <div className="w-full flex flex-row mt-4 justify-center">
          <Avatars />
        </div>
        <div className="justify-center w-full flex h-20">
          <Teks />
        </div>
        <Description />
        <div className="flex flex-row justify-center space-x-7 mt-7">
          <Button/>
          <ButtonCV/>
        </div>
        <div className="flex justify-center mt-5">
        <h2 className="text-white">EXPERIENCE WITH</h2>
        </div>
        <div className="flex flex-row justify-center">
          <NextJS/>
          <Laravel/>
          <React/>
          <FlutterR/>
          <Github/>
        </div>
      </section>

      <section id="projects" className="h-full flex items-center justify-center">
        {/* <h1 className="text-4xl font-bold">Projects Section</h1> */}
        <ProjectList/>
      </section>
      <section id="experience" className="h-full flex items-center justify-center">
        {/* <h1 className="text-4xl font-bold">Experience Section</h1> */}
        <Experience/>
      </section>
      <section id="contact" className="h-full flex items-center justify-center">
        {/* <h1 className="text-4xl font-bold">Contact Section</h1> */}
        <Cntk/>
      </section>
    </>
  );
}
