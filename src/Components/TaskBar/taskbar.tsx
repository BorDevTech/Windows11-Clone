import * as CUR from "@chakra-ui/react";
import OpenApp from "./../../Logic/openModals";

interface Props {
  portal: any;
}

const Taskbar = ({ portal }: Props) => {
  return (
    <CUR.HStack justifyContent={"center"} mt={2} mb={2}>
      <OpenApp portal={portal} index={"Start"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Search"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Desktop"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Chat"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Store"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Calculator"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"Notes"} position={"Taskbar"} />
      <OpenApp portal={portal} index={"To Do's"} position={"Taskbar"} />
    </CUR.HStack>
  );
};

export default Taskbar;
