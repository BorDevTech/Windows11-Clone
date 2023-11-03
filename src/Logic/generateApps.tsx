import { useState } from "react";
import * as CUR from "@chakra-ui/react";
import OpenApp from "./openModals";

interface Props {
  portal: any;
}

const GeneratedApps = ({ portal }: Props) => {
  const [
    appAmountObject,
    //@ts-ignore
    setCurrentAppAmount,
  ] = useState({
    //min is to represent the base windows packaged apps
    min: 40,
    //ideal is to represent grid space minus a row(e.g. Grid below uses 20 Columns and 9 Rows,we remove 1 row) for non-clipping
    //current is to represent current apps utilizing grid space should NOT exceed max
    current: 0,
    //max is to represent measured amount of grid space before apps begin clipping (e.g. Grid below uses 20 Columns and 9 Rows we remove 2 apps from the grid to always have space)
    max: 178,
  });

  const listedApps = [];
  for (let i = 0; i < appAmountObject.min; i++) {
    listedApps.push(
      <CUR.GridItem
        key={i}
        rowSpan={1}
        colSpan={1}
        onClick={() => {
          console.log(i);
        }}
      >
        <OpenApp portal={portal} index={i} position={"Desktop"} />
      </CUR.GridItem>
    );
  }
  return <>{listedApps}</>;
};

export default GeneratedApps;
