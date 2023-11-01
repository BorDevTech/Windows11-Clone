import * as CUR from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AppWindow from "./../AppScreen/AppWindow";
import Taskbar from "./../TaskBar/taskbar";

const VirtualDisplay = () => {
  const [appAmountObject, setCurrentAppAmount] = useState({
    //min is to represent the base windows packaged apps
    min: 40,
    //ideal is to represent grid space minus a row(e.g. Grid below uses 20 Columns and 9 Rows,we remove 1 row) for non-clipping

    //current is to represent current apps utilizing grid space should NOT exceed max
    current: 0,
    //max is to represent measured amount of grid space before apps begin clipping (e.g. Grid below uses 20 Columns and 9 Rows we remove 2 apps from the grid to always have space)
    max: 178,
  });
  useEffect(() => {
    const generateAppAmount = (min: number, max: number): number => {
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      return result;
    };

    console.log(appAmountObject.current);

    const removeListner = () => {
      console.log("removing listener");
      window.removeEventListener("load", () => {});
    };
    setCurrentAppAmount({
      ...appAmountObject,
      current: generateAppAmount(appAmountObject.min, appAmountObject.max),
    });

    window.addEventListener("load", removeListner);
    console.log(appAmountObject.current);
  }, []);

  console.log(appAmountObject.current);

  const GenerateApps = [...Array(appAmountObject.current)];

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
        {GenerateApps.map((index, i) => (
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
                {index}
              </CUR.Box>
            </CUR.VStack>
          </CUR.GridItem>
        ))}
        <AppWindow />
      </CUR.GridItem>
      <CUR.GridItem
        rowSpan={1}
        as={CUR.Card}
        borderTop={"2px"}
        borderTopRadius={0}
      >
        <Taskbar />
      </CUR.GridItem>
    </CUR.Grid>
  );
};

export default VirtualDisplay;
