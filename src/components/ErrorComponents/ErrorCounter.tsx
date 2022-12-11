import { Button, Card, styled } from "@mui/material";
import { useState } from "react";

const ErrorCounter = () => {
  const [count, setCount] = useState(0);

  if (count > 3) throw Error();

  return (
    <StyledCard variant="outlined">
      <StyledFlex>
        <span>Current count: {count}</span>
        <Button variant="outlined" onClick={() => setCount(count + 1)}>
          Increment count
        </Button>
      </StyledFlex>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  padding: "12px",
  borderColor: "red",
});

const StyledFlex = styled("div")({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

export default ErrorCounter;
