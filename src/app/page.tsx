"use client";

import BackgroundImage from "@/assets/stacked-waves-haikei.avif";
import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { TracingBeam } from "@/components/TracingBeam";
import MyScramble from "@/components/MyScramble";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Labs";
import { Button } from "@nextui-org/react";
import { projects, socials } from "@/../consts";
import Navbar from "@/components/Navbar";
import CodeHighlighter from "@/components/CodeHighlighter/Index";
import { getProjectUrl } from "@/../utils";
import LoaderImage from "@/components/LoaderImage";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <TracingBeam>
          <section id="start" className="">
            <div className="lg:min-h-screen h-[560px] relative grid place-items-center">
              <Image
                src={BackgroundImage}
                placeholder="blur"
                fill
                alt="stacked waves"
                priority
                quality={100}
                className="10"
              />
              <div className="relative  z-20 w-full">
                <div className="mx-auto w-11/12  md:w-2/3 lg:w-7/12">
                  <div className="flex flex-col gap-5 ">
                    <Reveal animationDelay={2}>
                      <span className="text-foreground-500">
                        {" "}
                        Start {"/> "}
                      </span>
                    </Reveal>
                    <Reveal bgColor="#5918df">
                      <h1 className="text-2xl font-semibold md:text-5xl text-foreground-900">
                        Hi , my name is{" "}
                        <strong className="text-my-primary">
                          {" "}
                          Rahul Tumma
                        </strong>
                      </h1>
                    </Reveal>
                    <Reveal bgColor="#5918df" animationDelay={1}>
                      <p className="text-2xl font-semibold md:text-3xl lg:text-5xl text-wrap sm:text-nowrap text-foreground-900 my-1">
                        i&nbsp;
                        <em className="font-normal font-serif">design</em>
                        &nbsp;and&nbsp;
                        <em className="font-mono font-normal">develop</em>
                        &nbsp;
                        <MyScramble />
                      </p>
                    </Reveal>
                    <Reveal animationDelay={3}>
                      <p className="text-foreground-500 text-xl">
                        Let me show You ...
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="bg-[rgb(20,18,28)] min-h-screen">
            <div className="h-full w-full mx-auto py-5 ">
              <div className="flex flex-col gap-5 mx-auto w-7/12 ">
                <span className="text-foreground-500"> Work {"/> "}</span>
              </div>
              <div className="w-[90%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <Link
                    key={getProjectUrl(project.title).slug}
                    href={getProjectUrl(project.title).url}
                    className="relative aspect-video w-full h-[300px]"
                  >
                    <div className="h-full w-full">
                      <LoaderImage
                        src={project.src}
                        alt={project.title}
                   /> </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
{/* 
          <section id="lab" className="bg-gray-800 ">
            <div className=" relative grid place-items-start ">
              <div className="relative  z-20 w-full mt-4">
                <div className="mx-auto w-7/12">
                  <div className="flex flex-col gap-5 ">
                    <span className="text-foreground-500"> Lab {"/> "}</span>
                    <p className="font-semibold">
                      Check out my other projects like IoT, open source
                      projects, animations , videos , experiments, mini games ,
                      archived stuff and more
                    </p>
                  </div>

                  <div className="flex gap-2 md:gap-5 mt-10 w-full flex-wrap md:flex-nowrap">
                  
                    <div className="flex-col flex-1">
                      <div>
                        <p className="text-foreground-500 font-bold text-2xl">
                          Codepens
                        </p>
                        <div className="mt-4">
                          <Projects data={projects} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section id="about" className="bg-[#14121c] min-h-screen relative">
            <div className="lg:min-h-screen relative grid place-items-start ">
              <div className="relative z-20 w-full mt-4">
                <div className="mx-auto w-7/12">
                  <span className="text-foreground-500"> About {"/> "}</span>
                </div>
                <div className="mx-auto w-fit md:translate-x-14">
                  <CodeHighlighter />
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-[-16px] left-0 w-full h-16 bg-[#14121c]"
              style={{ filter: "blur(10px)" }}
            ></div>
          </section>

          <section id="contact" className="bg-gray-800 min-h-screen">
            <div className="lg:min-h-screen h-[560px] relative grid place-items-start ">
              <div className="relative  z-20 w-full mt-4">
                <div className="mx-auto w-7/12">
                  <div className="flex flex-col gap-5 ">
                    <span className="text-foreground-500">
                      {" "}
                      Contact {"/> "}
                    </span>
                  </div>

                  <div className="mt-5 lg:mt-40 flex-1">
                    <p className="text-white font-semibold">Find me on:</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-3">
                      {socials.map((e) => (
                        <Button
                          as="a"
                          key={e.url}
                          href={e.url}
                          variant="bordered"
                          radius="full"
                          size="lg"
                        startContent={
                          <Image
                          height={24}
                          width={24}
                          src={e.icon}
                          alt={e.social}
                        />
                        }
                        >
                        
                          {e.username}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="mt-10"
                    variant="bordered"
                    radius="full"
                    size="lg"
                  >
                    Book a cooking class
                  </Button>
                  <p className="text-foreground-400 font-semibold mt-3 lg:mt-[30%]">
                    Made with {"</>"} by Rahul
                  </p>
                </div>
              </div>
            </div>
          </section>
        </TracingBeam>
      </main>
    </>
  );
}
