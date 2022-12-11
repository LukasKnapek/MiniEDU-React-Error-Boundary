import styled from "@emotion/styled";
import { Card, Skeleton } from "@mui/material";
import { useState } from "react";

const ErrorPreview = () => {
  const [loading, setLoading] = useState(false);
  const [causeError, setCauseError] = useState(false);

  if (causeError) throw new Error();

  const errorLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setCauseError(true);
    }, 3000);
  };

  return (
    <StyledCard variant="outlined" onClick={errorLoad}>
      {loading && <Skeleton variant="rectangular" height={100} />}
      {!loading && "Click here to load preview!"}
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  padding: "12px",
  textAlign: "center",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f5f4f2",
  },
  borderColor: "red",
});

export default ErrorPreview;
