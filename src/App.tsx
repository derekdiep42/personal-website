import DescriptionIcon from "@mui/icons-material/Description";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { MaterialUISwitch } from "./components/MaterialUISwitch";
import { StyledIconButton } from "./components/StyledIconButton";
import { options } from "./options";

var ReactRotatingText = require("react-rotating-text");

export enum Theme {
  Dark,
  Light,
}

function MyApp() {
  const [mode, setMode] = React.useState<Theme>(Theme.Dark);
  const [particlesContainer, setParticlesContainer] =
    React.useState<Container>();

  const particlesInit = React.useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (container: Container | undefined) => {
      if (container) {
        setParticlesContainer(container);
        container.loadTheme("dark");
      }
    },
    []
  );

  return (
    <>
      <Box
        height="100%"
        bgcolor={`${mode === Theme.Dark ? "#151515" : "#e1e1e1"}`}
        width="100%"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          height="100%"
          alignItems="center"
          gap={4}
          bgcolor={"transparent"}
          color={`${mode === Theme.Dark ? "white" : "black"}`}
        >
          <MaterialUISwitch
            mode={mode}
            onChange={() => {
              mode === Theme.Dark ? setMode(Theme.Light) : setMode(Theme.Dark);
              if (particlesContainer)
                mode === Theme.Dark
                  ? particlesContainer.loadTheme("light")
                  : particlesContainer.loadTheme("dark");
            }}
            sx={{ ml: "auto", mt: 2, mr: 2 }}
          />
          <Box display="flex" alignItems="center">
            <img
              src="profile.png"
              alt="pic"
              height="350px"
              style={{
                borderRadius: "50%",
                border: `${
                  mode === Theme.Dark ? "4px solid white" : "4px solid black"
                }`,
              }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            textAlign="center"
            sx={{
              "@media (max-width: 590px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography variant="h4">✨ Hi! My name is&nbsp;</Typography>
            <Typography variant="h4" sx={{ fontWeight: "650" }}>
              Derek Diep ✨
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            textAlign="center"
            sx={{
              "@media (max-width: 590px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography variant="h5">I'm a&nbsp;</Typography>
            <Typography variant="h5">
              <ReactRotatingText
                items={[
                  "Full Stack Web Developer 👨‍💻",
                  "Student of the University of Waterloo 👨‍🎓",
                  "Software Engineer 🛠️",
                  "PC and Keyboard Builder 🖥️",
                ]}
              />
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            maxWidth="850px"
            textAlign="center"
          >
            <Typography variant="h6">
              A seasoned, dedicated, and innovative engineer with a strong
              passion in software design and development. I thrive on exploring
              new technologies and ideas, and translating them into tangible
              real-world solutions.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneInTalkIcon />
              <Typography variant="h6">1-647-740-7637</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon />
              <Typography variant="h6">Toronto, Ontario</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            textAlign="center"
            gap={2}
            mb={2}
          >
            <StyledIconButton href="Resume-07-19-2023.pdf">
              <DescriptionIcon fontSize="large" />
            </StyledIconButton>
            <StyledIconButton href="mailto:derekdiep42@gmail.com">
              <EmailOutlinedIcon fontSize="large" />
            </StyledIconButton>
            <StyledIconButton href="https://www.linkedin.com/in/derek-diep/">
              <LinkedInIcon fontSize="large" />
            </StyledIconButton>
            <StyledIconButton href="https://github.com/derekdiep42">
              <GitHubIcon fontSize="large" />
            </StyledIconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyApp;
