import { Box, styled } from "@mui/material";
import ErrorCounter from "../ErrorComponents/ErrorCounter";
import { ErrorBoundary } from "react-error-boundary";
import ErrorButton from "../ErrorComponents/ErrorButton";
import ErrorPreview from "../ErrorComponents/ErrorPreview";

interface Props {
  activateBoundaries?: boolean;
}

const MainContent = ({ activateBoundaries = false }: Props) => {
  return (
    <Box>
      {activateBoundaries ? (
        <ErrorBoundary
          fallback={
            <StyledFallback>
              {"Error! Dark mode isn't actually implemented yet :("}
            </StyledFallback>
          }
        >
          <ErrorButton />
        </ErrorBoundary>
      ) : (
        <ErrorButton />
      )}

      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas
        wisi a erat. Quisque porta. In enim a arcu imperdiet malesuada. Vivamus
        ac leo pretium faucibus. Sed elit dui, pellentesque a, faucibus vel,
        interdum nec, diam. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus et
        lorem id felis nonummy placerat. Et harum quidem rerum facilis est et
        expedita distinctio. In dapibus augue non sapien. Nulla non arcu lacinia
        neque faucibus fringilla. Integer pellentesque quam vel velit. Sed vel
        lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Et
        harum quidem rerum facilis est et expedita distinctio.
      </p>

      {activateBoundaries ? (
        <ErrorBoundary
          fallback={
            <StyledFallback>
              {"Error! The backend is probably broken again :("}
            </StyledFallback>
          }
        >
          <ErrorPreview />
        </ErrorBoundary>
      ) : (
        <ErrorPreview />
      )}

      <p>
        In rutrum. Vestibulum fermentum tortor id mi. Donec vitae arcu. Duis
        condimentum augue id magna semper rutrum. Nullam at arcu a est
        sollicitudin euismod. Integer tempor. Morbi leo mi, nonummy eget
        tristique non, rhoncus non leo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Sed elit dui, pellentesque a,
        faucibus vel, interdum nec, diam. Fusce wisi. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Cras pede libero, dapibus nec, pretium sit
        amet, tempor quis. Etiam neque. Fusce nibh. Mauris tincidunt sem sed
        arcu. Nunc dapibus tortor vel mi dapibus sollicitudin. Mauris metus. Nam
        sed tellus id magna elementum tincidunt. Integer in sapien. Praesent
        vitae arcu tempor neque lacinia pretium.
      </p>

      {activateBoundaries ? (
        <ErrorBoundary
          fallback={
            <StyledFallback>
              {"Error! The counter can't count further than 3 :("}
            </StyledFallback>
          }
        >
          <ErrorCounter />
        </ErrorBoundary>
      ) : (
        <ErrorCounter />
      )}

      <p>
        Suspendisse sagittis ultrices augue. Ut tempus purus at lorem. Integer
        in sapien. Pellentesque sapien. Integer malesuada. Fusce tellus. Nulla
        non arcu lacinia neque faucibus fringilla. Fusce tellus. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime placeat facere possimus, omnis voluptas assumenda
        est, omnis dolor repellendus. Pellentesque ipsum. Maecenas ipsum velit,
        consectetuer eu lobortis ut, dictum at dui. Curabitur bibendum justo non
        orci. Etiam posuere lacus quis dolor. Quisque porta. Nullam feugiat,
        turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum
        odio risus sit amet ante. Ut tempus purus at lorem. Integer pellentesque
        quam vel velit. Etiam ligula pede, sagittis quis, interdum ultricies,
        scelerisque eu. Proin in tellus sit amet nibh dignissim sagittis.
      </p>
    </Box>
  );
};

const StyledFallback = styled("b")({ color: "red" });

export default MainContent;
