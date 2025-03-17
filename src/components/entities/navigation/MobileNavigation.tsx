import { NavigationLink } from "@/components/shared";
import { HeaderNav } from "@/utils/config";

interface IProps {
  isMenuOpen: boolean;
}

export const MobileNavigation = ({ isMenuOpen }: IProps) => {
  //item height + gap + padding y
  const height = HeaderNav.length * 24 + 16 * (HeaderNav.length - 1) + 32;
  return (
    <nav
      className={`absolute top-full left-0 z-10 flex w-full grow overflow-hidden bg-foreground transition-all duration-500`}
      style={isMenuOpen ? { maxHeight: `${height}px` } : { maxHeight: 0 }}
    >
      <ul className="flex w-full flex-col gap-4 px-2 py-4">
        {HeaderNav.map((item) => (
          <li className="flex bg-background" key={item.href}>
            <NavigationLink
              className="group relative w-full text-center uppercase"
              to={item.href}
            >
              {item.name}
              <span className="absolute bottom-[-2px] left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-primary transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
            </NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
