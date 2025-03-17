import { BurgerPiece } from "./BurgerPiece";

interface IProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu = ({ isMenuOpen, onClick }: IProps) => {
  return (
    <button className="relative block h-6 w-6 md:hidden" onClick={onClick}>
      <div className="absolute top-0 left-0 flex h-1/4 w-full justify-between">
        <BurgerPiece />
        <BurgerPiece isMenuOpen={isMenuOpen} />
        <BurgerPiece />
      </div>
      <div className="absolute top-1/2 left-0 flex h-1/4 w-full -translate-y-1/2 justify-between">
        <BurgerPiece isMenuOpen={isMenuOpen} />
        <BurgerPiece />
        <BurgerPiece isMenuOpen={isMenuOpen} />
      </div>
      <div className="absolute bottom-0 left-0 flex h-1/4 w-full justify-between">
        <BurgerPiece />
        <BurgerPiece isMenuOpen={isMenuOpen} />
        <BurgerPiece />
      </div>
    </button>
  );
};
