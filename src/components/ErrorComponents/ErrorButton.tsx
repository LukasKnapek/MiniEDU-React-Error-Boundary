import { Button } from "@mui/material";
import { useState } from "react";

const ErrorButton = () => {
  const [darkModeError, setDarkModeError] = useState(false);
  if (darkModeError) throw new Error();

  return (
    <Button
      color="error"
      variant="outlined"
      onClick={() => setDarkModeError(true)}
    >
      🌙 Dark Mode
    </Button>
  );
};

export default ErrorButton;
