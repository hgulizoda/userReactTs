import { Box, Flex, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box component="header">
      <Flex
        className="container"
        py={20}
        justify={"space-between"}
        align={"center"}
      >
        <Text fz={"h2"}>Logo</Text>
        <Flex gap={10} c={"white"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Users</NavLink>
          <NavLink to="/">Contact</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
