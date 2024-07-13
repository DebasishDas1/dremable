import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavBerListItem = ({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) => {
  return (
    <li className="p-4 hover:bg-black/10 rounded-xl">
      <NavigationMenuLink asChild>
        <Link href={href} className="flex-shrink-0">
          <div className="text-xl leading-none pb-2 font-bold">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBerListItem;
