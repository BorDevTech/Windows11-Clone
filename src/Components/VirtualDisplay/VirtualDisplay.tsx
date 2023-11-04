import { useRef } from "react";
import * as CUR from "@chakra-ui/react";
import Taskbar from "./../TaskBar/taskbar";
import GeneratedApps from "./../../Logic/generateApps";

const VirtualDisplay = () => {
  const testRef = useRef<any>();

  return (
    <CUR.Grid
      templateRows={`repeat(20,1fr)`}
      as={CUR.Card}
      h={innerHeight}
      w={innerWidth}
    >
      <CUR.GridItem
        rowSpan={19}
        as={CUR.Grid}
        templateColumns={`repeat(20,1fr)`}
        templateRows={`repeat(9,1fr)`}
        ref={testRef}
        pt={2}
        pb={4}
      >
        <GeneratedApps portal={testRef} />
      </CUR.GridItem>
      <CUR.GridItem
        rowSpan={1}
        as={CUR.Card}
        borderTop={"2px"}
        borderColor={"blackAlpha.400"}
        borderTopRadius={0}
      >
        <Taskbar portal={testRef} />
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default VirtualDisplay;
