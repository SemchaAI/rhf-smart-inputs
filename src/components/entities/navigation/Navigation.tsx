import { NavigationLink } from "@/components/shared";
import { HeaderNav } from "@/utils/config";

export const Navigation = () => {
  return (
    <nav className="hidden grow md:block">
      <ul className="flex justify-end gap-2">
        {HeaderNav.map((item) => (
          <li key={item.href}>
            <NavigationLink to={item.href}>{item.name}</NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
