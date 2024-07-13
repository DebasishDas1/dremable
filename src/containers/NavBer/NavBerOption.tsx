import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavListItem from "./NarListItem";
import {
  kolkata_magicians_options,
  kolkata_venues_options,
  goa_magicians_options,
} from "./NavData";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBerOption = () => {
  const pathname = usePathname().split("/");

  return (
    <NavigationMenu className="text-center">
      <NavigationMenuList>
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger
            className={`text-xl ${
              pathname.includes("magicians") ? "font-black" : "font-light"
            }`}
          >
            Magicians
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-3 bg-white">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-black py-4">
                Kolkata
              </div>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-green-100 rounded-xl">
                {kolkata_magicians_options.map(
                  ({ name, linkUrl, urlTitle }) => (
                    <NavListItem
                      key={name}
                      title={name}
                      href={linkUrl}
                      description={urlTitle}
                    />
                  )
                )}
              </ul>
              <div className="text-5xl font-black text-transparent bg-clip-text py-4 bg-black">
                Goa
              </div>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rounded-xl bg-violet-100">
                {goa_magicians_options.map(({ name, linkUrl, urlTitle }) => (
                  <NavListItem
                    key={name}
                    title={name}
                    href={linkUrl}
                    description={urlTitle}
                  />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger
            className={`text-xl ${
              pathname.includes("wedding_venues") ? "font-black" : "font-light"
            }`}
          >
            Wedding Venues
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
              {kolkata_venues_options.map(({ name, linkUrl, urlTitle }) => (
                <NavListItem
                  key={name}
                  title={name}
                  href={linkUrl}
                  description={urlTitle}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuItem className="px-3">
        <Link href="/blog" legacyBehavior passHref>
          <NavigationMenuLink
            className={`text-xl ${
              pathname.includes("blog") ? "font-black" : "font-light"
            }`}
          >
            Blog
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="px-3">
        <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink
            className={`text-xl ${
              pathname.includes("about") ? "font-black" : "font-light"
            }`}
          >
            About
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default NavBerOption;
