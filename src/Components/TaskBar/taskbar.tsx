import * as CUR from "@chakra-ui/react";
import AppButton from "../AppButton/AppButton";

const Taskbar = () => {
  return (
    <CUR.HStack justifyContent={"center"} mt={2} mb={2}>
      <AppButton Name="Start" />
      <AppButton Name="Search" />
      <AppButton Name="Desktop" />
      <AppButton Name="Chat" />
      <AppButton Name="Store" />
      <AppButton Name="Calculator" />
      <AppButton Name="Notes" />
      <AppButton Name="To Do's" />
    </CUR.HStack>
  );
};

export default Taskbar;
