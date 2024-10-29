//@ts-nocheck
"use client";
import { Button, user } from "@nextui-org/react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import useProjectNavigation from "../_hooks/useProjectNavigation";
import { getProjectUrl } from "@/../utils";
import { useRouter } from "next/navigation";
import { SVGProps } from "react";
function ProjectNavigator({
  projects,
  slug,
}: {
  projects: {
    title: string;
    src: StaticImageData;
    href: string;
    color: string;
    technologies: string[];
    description: string;
  }[];
  slug: string;
}) {
  const router = useRouter();

  const currentIndex: number = projects.findIndex(
    (e) => getProjectUrl(e.title).slug === slug
  );

  const { next, previous, isFirst, isLast } = useProjectNavigation({
    projects,
    activeIndex: currentIndex,
  });
  return (
    <div className="flex w-full justify-between items-center">
      <Button
        as={Link}
        href="/"
        color="secondary"
        onClick={(e) => {
          e.preventDefault();
          router.prefetch("/");
          router.push("/");
        }}
        isIconOnly
        size="md"
        radius="full"
      >
        <MdiArrowLeftThin />
      </Button>
      <div className="flex gap-2">
        {!isFirst && (
          <Button
            color="secondary"
            isIconOnly
            size="md"
            radius="full"
            onClick={() => previous()}
          >
            <MdiArrowLeftThin />
          </Button>
        )}
        {!isFirst && !isLast && <span>/</span>}

        {!isLast && (
          <Button
            color="secondary"
            size="md"
            isIconOnly
            radius="full"
            onClick={() => next()}
          >
            <IcBaselineArrowRightAlt />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectNavigator;

export function IcBaselineArrowRightAlt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
    </svg>
  );
}

export function MdiArrowLeftThin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
      ></path>
    </svg>
  );
}
