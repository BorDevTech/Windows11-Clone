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
      style={{ border: "1px solid red" }}
    >
      <CUR.GridItem
        rowSpan={19}
        style={{ border: "1px solid orange" }}
        as={CUR.Grid}
        templateColumns={`repeat(20,1fr)`}
        templateRows={`repeat(9,1fr)`}
        ref={testRef}
      >
        <GeneratedApps portal={testRef} />
      </CUR.GridItem>
      <CUR.GridItem
        rowSpan={1}
        as={CUR.Card}
        borderTop={"2px"}
        borderTopRadius={0}
      >
        <Taskbar portal={testRef} />
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default VirtualDisplay;
