import * as CUR from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const VirtualDisplay = () => {
  const randomAppAmount = { ideal: 20 * 8, max: 178 };

  const randomExampleApps = [...Array(randomAppAmount.max)];

  return (
    <CUR.Grid
      templateRows={`repeat(20,1fr)`}
      as={CUR.Card}
      h={innerHeight}
      w={innerWidth}
      style={{ border: "1px solid red" }}
    >
      <CUR.GridItem
        rowSpan={19}
        style={{ border: "1px solid orange" }}
        as={CUR.Grid}
        templateColumns={`repeat(20,1fr)`}
        templateRows={`repeat(9,1fr)`}
      >
        {randomExampleApps.map((index, i) => (
          <CUR.GridItem key={i} rowSpan={1} colSpan={1}>
            <CUR.VStack gap={0}>
              <CUR.Box
                mt={2}
                h={"60px"}
                w={"60px"}
                style={{ border: "1px solid blue" }}
                as={CUR.Card}
              >
                <CUR.Icon justifyContent={"center"}>
                  {/* Icon shall be either a community(backer), creator, generic design */}
                </CUR.Icon>
              </CUR.Box>
              <CUR.Box>
                {/* Should consist of App Name */}
                {i}
              </CUR.Box>
            </CUR.VStack>
          </CUR.GridItem>
        ))}
      </CUR.GridItem>
      <CUR.GridItem
        rowSpan={1}
        as={CUR.Card}
        borderTop={"2px"}
        borderTopRadius={0}
      >
        <CUR.HStack justifyContent={"center"} mt={2} mb={2}>
          <CUR.Box h={"40px"} w={"40px"} style={{ border: "1px solid blue" }}>
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Box>
          <CUR.Box h={"40px"} w={"40px"} style={{ border: "1px solid indigo" }}>
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Box>
          <CUR.Box h={"40px"} w={"40px"} style={{ border: "1px solid violet" }}>
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Box>
          <CUR.Box h={"40px"} w={"40px"} style={{ border: "1px solid pink" }}>
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Box>
          <CUR.Box h={"40px"} w={"40px"} style={{ border: "1px solid grey" }}>
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Box>
        </CUR.HStack>
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default VirtualDisplay;
