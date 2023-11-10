import * as CUR from "@chakra-ui/react";
import * as AI from "react-icons/ai";
import * as IO5 from "react-icons/io5";

const Start = () => {
  let pinnedApps = [];
  for (let i = 0; i < 12; i++) {
    pinnedApps.push(
      <CUR.GridItem as={CUR.Box} p={2} key={i}>
        <CUR.Button textAlign={"center"} h={10} w={10}>
          {i}
        </CUR.Button>
      </CUR.GridItem>
    );
  }
  let recommendedApps = [];
  for (let i = 0; i < 8; i++) {
    recommendedApps.push(
      <CUR.GridItem as={CUR.Box} p={2} key={i}>
        <CUR.Button textAlign={"right"} h={"55px"} w={"275px"}>
          {i}
        </CUR.Button>
      </CUR.GridItem>
    );
  }
  return (
    <>
      <CUR.Grid>
        <CUR.GridItem as={CUR.Grid} bg={"#323232"}>
          <CUR.GridItem mt={4} mb={8}>
            <CUR.Input placeholder="Search for apps" />
          </CUR.GridItem>
          <CUR.GridItem>
            <CUR.HStack>
              <CUR.Text>Pinned Apps</CUR.Text>
              <CUR.Button>All Apps</CUR.Button>
            </CUR.HStack>

            <CUR.Grid templateColumns={`repeat(6,1fr)`}>
              {pinnedApps}
              {/* Render 6 Pinned Apps per row from ../Backend as GridItems
              replace current list using pagination if beyond 12*/}
            </CUR.Grid>
          </CUR.GridItem>
          <CUR.GridItem>
            Recommended Apps
            <CUR.Grid templateColumns={`repeat(2,1fr)`}>
              {recommendedApps}
              {/* Render 8 Sponsored Apps from ../Backend as GridItems*/}
            </CUR.Grid>
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
