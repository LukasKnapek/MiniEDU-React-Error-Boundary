import { Box, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import {
  ErrorBoundary,
  FallbackProps,
  useErrorHandler,
} from "react-error-boundary";
import LoadingButton from "@mui/lab/LoadingButton";

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <Box>
        <ErrorText>{"Error! This component is broken :("}</ErrorText>
      </Box>
      <Box>
        <Button variant="outlined" onClick={resetErrorBoundary}>
          Reset state
        </Button>
      </Box>
    </div>
  );
};

const AsyncErrorComponent = () => {
  const [loading, setLoading] = useState(false);
  const handleError = useErrorHandler();

  const fetchApiData = async () => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 3000));
      throw new Error();
    } catch (error) {
      handleError(error);
    }
    setLoading(false);
  };
  return (
    <StyledCard variant="outlined">
      <h4>Error boundary for async code</h4>
      <StyledFlex>
        <LoadingButton
          loading={loading}
          onClick={fetchApiData}
          variant="outlined"
        >
          Fetch API data
        </LoadingButton>
      </StyledFlex>
    </StyledCard>
  );
};

const ReactErrorBoundaryContent = () => {
  const [count, setCount] = useState(0);

  const ErrorComponent = () => {
    throw new Error();
  };

  return (
    <StyledDiv>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        resetKeys={[count]}
        onReset={() => setCount(0)}
      >
        <StyledCard variant="outlined">
          <h4>Counter with error boundary reset</h4>
          <StyledFlex>
            <span>Count: {count}</span>
            <Button onClick={() => setCount(count + 1)} variant="outlined">
              Increment counter up to 3
            </Button>
          </StyledFlex>
          {count > 3 && <ErrorComponent />}
        </StyledCard>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AsyncErrorComponent />
      </ErrorBoundary>
    </StyledDiv>
  );
};

const StyledCard = styled(Card)({
  padding: "16px",
  width: "100%",
});

const StyledFlex = styled("div")({
  display: "flex",
  gap: "12px",
});

const ErrorText = styled("b")({
  color: "red",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export default ReactErrorBoundaryContent;
