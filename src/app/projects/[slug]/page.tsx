//@ts-nocheck

import { projects } from "@/../consts";
import { getProjectUrl } from "@/../utils";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectNavigator from "../_components/ProjectNavigator";
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: getProjectUrl(project.title).slug,
  }));
}

function Page({ params }: { params: { slug: string } }) {
  const currentData = projects.find(
    (e) => getProjectUrl(e.title).slug == params.slug
  );
  if (!currentData) return notFound();

  return (
    <div className="">
      <div className="flex h-full overflow-hidden">
        <div className="relative min-h-screen lg:w-2/3">
          <div className="overflow-y-scroll h-full w-full">
            <Image
              className="h-full w-full object-contain"
              src={currentData.src}
              alt=""
            ></Image>
          </div>
        </div>

        <div className="fixed top-0 right-0 bg-slate-700 lg:w-2/6 h-full">
          <div className="px-8 py-9">
            <div className="flex flex-col">
              <ProjectNavigator projects={projects} slug={params.slug} />
              <div className="flex flex-wrap gap-2 w-full mt-5">
                <p className="text-3xl text-foreground-500">
                  {currentData.technologies.map((e) => "#" + e).join(",")}
                </p>
              </div>
              <div className="mt-9">
                <h2 className="font-semibold text-white text-4xl">
                  {currentData.title}
                </h2>
                <p className="mt-7">{currentData.description}</p>
              </div>

              <div>
                <Button
                  size="lg"
                  as="a"
                  href={currentData.href}
                  target="_blank"
                  variant="bordered"  
                  className="rounded-full text-white"
                >
                  Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
