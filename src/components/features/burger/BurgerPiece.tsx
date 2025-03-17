interface IProps {
  isMenuOpen?: boolean;
}
export const BurgerPiece = ({ isMenuOpen = false }: IProps) => {
  const color = isMenuOpen ? "bg-background" : "bg-primary";
  return (
    <span
      className={`block h-full w-1/4 ${color} transition-colors duration-500 hover:bg-background`}
    />
  );
};
