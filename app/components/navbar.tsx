"use client";

import { useState } from "react";

import GithubIcon from "./github.icon";
import FaceBookIcon from "./facebook.icon";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">2024 總統政見便利貼</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/research">
            Research
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            target="_blank"
            href="https://github.com/banahaker/2024policiestw"
          >
            <Button
              isIconOnly
              color="primary"
              variant="ghost"
              aria-label="Github"
            >
              <GithubIcon></GithubIcon>
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100095056636158"
          >
            <Button
              isIconOnly
              color="primary"
              variant="ghost"
              aria-label="Github"
            >
              <FaceBookIcon></FaceBookIcon>
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color={"foreground"} className="w-full" href="/" size="lg">
            Home
          </Link>
          <Link color={"foreground"} className="w-full" href="/about" size="lg">
            About
          </Link>
          <Link
            color={"foreground"}
            className="w-full"
            href="/research"
            size="lg"
          >
            Research
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
