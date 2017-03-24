// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Introduction to Front-End Web Development
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          A Primer to HTML, CSS and React.js
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="" caps>What is the Front-End?</Heading>
        <BlockQuote>
          <Quote>"The part of the web that you can see and interact with."</Quote>
          <Cite>Treehouse Blog</Cite>
        </BlockQuote>


        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What we are going to cover?</Heading>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>ReactJS</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
