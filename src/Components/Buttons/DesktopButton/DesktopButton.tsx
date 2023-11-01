import * as CUR from "@chakra-ui/react";
import AppButton from "../AppButton/AppButton";

interface Props {
  index?: any;
}
const DesktopButton = ({ index }: Props) => {
  {
    /* Should consist of App Name */
  }
  return <AppButton Name={index + 1} AppSize={{ w: "60px", h: "60px" }} />;
};
export default DesktopButton;
