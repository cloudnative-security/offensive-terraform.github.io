import React from "react";
import { Box } from "grommet";
import Nav from "./Nav";

const Page = ({ children, background, themeChecked, onThemeChange }) => (
  <Box pad="large" background={background}>
    <Box>
      <Nav themeChecked={themeChecked} onThemeChange={onThemeChange} />
      <Box margin={{ top: "large" }}>{children}</Box>
    </Box>
  </Box>
);

Page.propTypes = Box.propTypes;

export default Page;
