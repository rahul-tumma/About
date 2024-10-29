//@ts-nocheck

"use client";
import { SVGProps, useState, useEffect } from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = ["Start", "Work", "Lab", "About", "Contact"];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      // Cleanup observer
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <NextUINavbar
      shouldHideOnScroll
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className=" fixed z-50 after:shadow-md after:content-[''] after:left-0 after:top-0 after:absolute after:w-full after:h-6 after:bg-slate-900 after:blur-sm "
      isBlurred
      classNames={{
        base: "bg-transparent backdrop-blur-none backdrop-filter-none",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand>
          <MdiCandelabraFire />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden    sm:flex gap-4 " justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="group"
            isActive={activeSection === item.toLowerCase()}
            key={`${item}-${index}`}
          >
            <Link
              className="w-full text-foreground-400  text-[22px] font-normal hover:opacity-100 group-hover:text-foreground-900 group-data-[active=true]:text-foreground-900 "
              href={"#" + item.toLowerCase()}
              size="lg"
            >
              {item}
              <span className="text-[#494949] text-nowrap"> {"/>"}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="z-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-foreground-900"
              href={"#" + item.toLowerCase()}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

function MdiCandelabraFire(props: SVGProps<SVGSVGElement>) {
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
        d="M18 7c.83 0 1.5-.67 1.5-1.5S18.83 3 18 3s-1.5 1.67-1.5 2.5S17.17 7 18 7m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M12 6c.83 0 1.5-.67 1.5-1.5S12.83 2 12 2s-1.5 1.67-1.5 2.5S11.17 6 12 6m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M6 7c.83 0 1.5-.67 1.5-1.5S6.83 3 6 3S4.5 4.67 4.5 5.5S5.17 7 6 7m0-1.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M20.5 11c0 .55-.45 1-1 1H19v2c0 1.11-.89 2-2 2h-4v4h1a2 2 0 0 1 2 2H8c0-1.1.9-2 2-2h1v-4H7a2 2 0 0 1-2-2v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c.55 0 1 .45 1 1s-.45 1-1 1H7v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V8c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c.55 0 1 .45 1 1s-.45 1-1 1H13v2h4v-2h-.5c-.55 0-1-.45-1-1s.45-1 1-1V9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c.55 0 1 .45 1 1"
      ></path>
    </svg>
  );
}
export default Navbar;
