import { useEffect, useState } from "react";
import { TextCursorInput } from "lucide-react";
import { useLocation } from "react-router-dom";

import { Container, NavigationLink } from "@/components/shared";
import { useScrollControl } from "@/utils/hooks";
import { BurgerMenu, ThemeSwitcher } from "@/components/features";
import { MobileNavigation, Navigation } from "@/components/entities";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollControl(isMenuOpen);
  const { pathname } = useLocation();

  useEffect(() => {
    // hide sidebar on path change
    setIsMenuOpen(false);
  }, [pathname]);

  function clickHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="after:content[''] after:border-foreground-muted relative w-full bg-foreground after:absolute after:bottom-0 after:left-0 after:h-0 after:w-full after:border-t after:border-solid">
      <Container>
        <div className="flex items-center justify-between gap-2 py-5">
          <NavigationLink to="/" className="flex items-center gap-2">
            <TextCursorInput size={40} />
            <h1 className="block text-xl md:hidden lg:block">
              Smart Form Inputs
            </h1>
          </NavigationLink>

          <MobileNavigation isMenuOpen={isMenuOpen} />
          <Navigation />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <BurgerMenu isMenuOpen={isMenuOpen} onClick={clickHandler} />
          </div>
        </div>
      </Container>
    </header>
  );
};
