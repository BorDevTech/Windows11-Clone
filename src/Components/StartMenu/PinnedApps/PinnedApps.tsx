import React from "react";
import * as CUR from "@chakra-ui/react";

const PinnedApps = () => {
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
  return (
    <>
      <CUR.Text fontWeight={"bold"} fontSize={"sm"}>
        Pinned Apps
      </CUR.Text>
      <CUR.Button>All Apps</CUR.Button>
      <CUR.Grid templateColumns={`repeat(6,1fr)`} gap={0}>
        {pinnedApps}
        {/* Render 6 Pinned Apps per row from ../Backend as GridItems
    replace current list using pagination if beyond 12*/}
      </CUR.Grid>
    </>
  );
};

export default PinnedApps;
