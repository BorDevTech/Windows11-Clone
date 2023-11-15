import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import * as AI from "react-icons/ai";
import * as IO5 from "react-icons/io5";
import RecommendedApps from "./../Components/StartMenu/RecommendeApps/RecommendedApps";
import PinnedApps from "./../Components/StartMenu/PinnedApps/PinnedApps";

const Start = () => {
  return (
    <>
      <CUR.Grid gap={0}>
        <CUR.GridItem
          as={CUR.Grid}
          bg={"#323232"}
          templateColumns={`repeat(20,1fr)`}
        >
          <CUR.GridItem colSpan={19}>
            <CUR.Input placeholder="Search for apps" />
            <PinnedApps />
            <RecommendedApps />
          </CUR.GridItem>
          <CUR.GridItem
            colSpan={1}
            as={CUR.Grid}
            templateRows={`repeat(4,1fr)`}
          >
            <CUR.GridItem colStart={2}></CUR.GridItem>
            <CUR.VStack>
              <CUR.Button aria-label="pinned-apps up">
                <CUI.TriangleUpIcon />
              </CUR.Button>
              <CUR.Button aria-label="pinned-apps down">
                <CUI.TriangleDownIcon />
              </CUR.Button>
            </CUR.VStack>
          </CUR.GridItem>
        </CUR.GridItem>
        <CUR.GridItem as={CUR.Flex} bg={"#292929"}>
          <CUR.Button
            bg={"blackAlpha"}
            leftIcon={
              <CUR.Avatar
                icon={<AI.AiOutlineUser fontSize="1.5rem" />}
                size={"sm"}
              />
            }
          >
            Login
          </CUR.Button>
          <CUR.Spacer />
          <CUR.Menu direction={"rtl"} placement="top-end" preventOverflow>
            <CUR.MenuButton as={CUR.Button} bg={"blackAlpha"}>
              <AI.AiOutlinePoweroff fontSize="1.5rem" />
            </CUR.MenuButton>
            <CUR.MenuList>
              <CUR.MenuItem as={CUR.Button} ml={2} mr={2}>
                Sign-in options
              </CUR.MenuItem>
              <CUR.MenuDivider />
              <CUR.MenuItem as={CUR.Button} p={0} m={0}>
                <IO5.IoMoonOutline />
                Sleep
              </CUR.MenuItem>
              <CUR.MenuItem as={CUR.Button} p={0} m={0}>
                Shut down
              </CUR.MenuItem>
              <CUR.MenuItem as={CUR.Button} p={0} m={0}>
                Restart
              </CUR.MenuItem>
            </CUR.MenuList>
          </CUR.Menu>
        </CUR.GridItem>
      </CUR.Grid>
    </>
  );
};

export default Start;
