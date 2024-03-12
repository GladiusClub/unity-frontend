import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex; // Use flexbox for alignment
  justify-content: center; // Center content horizontally
  align-items: center; // Center content vertically
  background-color: purple; // Set the background color to purple
  min-height: 100vh; // Ensure it covers the whole viewport height
  color: white; // Adjust text color for better readability (optional)
`;

const StyledUnityCanvas = styled.div`
  width: 80%; // Set the width of the Unity canvas to 80% of its container
  height: 80vh; // Set the height to 80% of the viewport height
  max-width: 900px; // Maximum width (optional, adjust as needed)
  max-height: 600px; // Maximum height (optional, adjust as needed)
  canvas {
    width: 100%; // Ensure the canvas fills the container
    height: 100%;
  }
`;

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: process.env.PUBLIC_URL + "/build/GladiusBuild.loader.js",
    dataUrl: process.env.PUBLIC_URL + "/build/GladiusBuild.data",
    frameworkUrl: process.env.PUBLIC_URL + "/build/GladiusBuild.framework.js",
    codeUrl: process.env.PUBLIC_URL + "/build/GladiusBuild.wasm",
  });

  return (
    <StyledContainer>
      <StyledUnityCanvas>
        <Unity unityProvider={unityProvider} />
      </StyledUnityCanvas>
    </StyledContainer>
  );
}

export default App;
