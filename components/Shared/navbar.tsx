"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { title } from "@/components/Shared/primitives";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { useClerk } from "@clerk/clerk-react";
import { ThemeSwitch } from "@/components/Shared/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  SearchIcon,
  LinkedinIcon,
  LogOutIcon,
  LoginIcon,
} from "@/components/Shared/icons";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";

export const Navbar = () => {
  const { user } = useClerk();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Procurar..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="mt-4">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="https://raw.githubusercontent.com/Claudenir-Nojosa/servidor_estaticos/main/logo.png"
              height={80}
              width={80}
              alt="logo"
            />
            <h1 className={title({ color: "yellow", size: "sm" })}>
              CLAWNCODING&nbsp;
            </h1>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 sm:pl-14 lg:pl-0 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          {user ? (
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <LogOutIcon />
                </div>
              </SignOutButton>
            </SignedIn>
          ) : (
            <Link className="cursor-pointer" href="/sign-up">
              <LoginIcon className="text-default-500" />
            </Link>
          )}
        </NavbarItem>

        <div className="hidden lg:flex">
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: "py-2 px-4 dark:bg-[#7f7979]",
              },
            }}
          />
        </div>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />

        <div className="hidden md:flex">
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: "py-2 px-4 dark:bg-[#7f7979]",
              },
            }}
          />
        </div>
      </NavbarContent>

      <NavbarMenu className="mt-8">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 4
                    ? "danger"
                    : index === siteConfig.navMenuItems.length - 2
                    ? "primary"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            {user ? (
              // Usuário autenticado, exibe o botão "Sair"
              <SignedIn>
                <SignOutButton>
                  <div className="flex cursor-pointer">
                    <h4 className="text-red-600 h-7">Sair</h4>
                  </div>
                </SignOutButton>
              </SignedIn>
            ) : (
              // Usuário não autenticado, exibe o botão "Login"
              <Link color="foreground" href="/sign-in" size="lg">
                Login
              </Link>
            )}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
