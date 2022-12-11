import { useState } from "react";
import { Tabs, Tab, styled, Button } from "@mui/material";

import GlobalErrorBoundary from "./components/Boundary/GlobalErrorBoundary";
import ReactErrorBoundaryContent from "./components/Content/ReactErrorBoundaryContent";
import MainContent from "./components/Content/MainContent";

function App() {
  const [currentTab, setCurrentTab] = useState<string>("noBoundary");

  const MainLayout = (
    <StyledLayout>
      <StyledDiv>
        <Tabs
          orientation="vertical"
          value={currentTab}
          onChange={(_event, newTab) => setCurrentTab(newTab)}
        >
          <Tab label="No Error Boundary" value="noBoundary" />
          <Tab label="Global Boundary" value="globalBoundary" />
          <Tab label="Granular Boundaries" value="granularBoundaries" />
          <Tab label="react-error-boundary" value="reactErrorBoundary" />
        </Tabs>
      </StyledDiv>

      {currentTab === "noBoundary" && <MainContent />}
      {currentTab === "globalBoundary" && <MainContent />}
      {currentTab === "granularBoundaries" && (
        <MainContent activateBoundaries />
      )}
      {currentTab === "reactErrorBoundary" && <ReactErrorBoundaryContent />}
    </StyledLayout>
  );

  return currentTab === "noBoundary" ? (
    MainLayout
  ) : (
    <GlobalErrorBoundary>{MainLayout}</GlobalErrorBoundary>
  );
}

const StyledLayout = styled("div")({
  display: "flex",
  gap: "16px",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "space-between",
  flexShrink: 0,
  minWidth: 250,
});

export default App;
