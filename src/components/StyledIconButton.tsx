import { IconButton } from "@mui/material";
import { ReactNode } from "react";

interface StyledIconButtonProps {
  href: string;
  children: ReactNode;
}

export const StyledIconButton: React.FC<StyledIconButtonProps> = ({
  href,
  children,
}) => (
  <IconButton
    color="inherit"
    href={href}
    target="_blank"
    sx={{
      borderRadius: "42%",
      border: "2px solid",
      transition: "transform 200ms",
      "&:hover": {
        transition: "transform 200ms",
        transform: "scale(1.25)",
      },
    }}
  >
    {children}
  </IconButton>
);
