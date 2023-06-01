import React from "react";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";

import { tokens } from "../theme";

const OmicButton = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { children, startIcon, onClick, size, variant } = props;
  return (
    <Button
      style={{
        background: "#3354FB", //  colors.primary[400]
        borderRadius: "4px",
        alignItems: "center",
        color: colors.grey[900],
        textTransform: "capitalize",
      }}
      onClick={onClick}
      startIcon={startIcon}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default OmicButton;
