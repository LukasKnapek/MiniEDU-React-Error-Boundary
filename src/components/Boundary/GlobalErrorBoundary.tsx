import { styled } from "@mui/system";
import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Logging to Sentry or other service would go here
    console.error("Error boundary caught an error!");
  }

  render() {
    if (this.state.hasError) {
      return <StyledError>Application encountered an error!</StyledError>;
    }

    return this.props.children;
  }
}

const StyledError = styled("h1")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
