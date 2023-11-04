import AppButton from "../AppButton/AppButton";
import * as CUR from "@chakra-ui/react";

interface Props {
  index?: any;
  Logic?: any;
}
const DesktopButton = ({ index, Logic }: Props) => {
  {
    /* Should consist of App Name */
  }
  return (
    <>
      <CUR.VStack gap={0} onClick={Logic}>
        <AppButton
          Name={index}
          AppSize={{ w: "60px", h: "60px" }}
          NameTag={!index}
        />
        <CUR.Box w={"71px"} textAlign={"center"}>
          {index}
        </CUR.Box>
      </CUR.VStack>
    </>
  );
};
export default DesktopButton;
