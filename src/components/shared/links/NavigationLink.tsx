import { NavLink } from "react-router-dom";

interface IProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink = ({ to, children, className }: IProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `${className ? className + " " : ""}${
          isPending
            ? "text-action-disabled"
            : isActive
              ? "text-primary"
              : "text-text-primary"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
