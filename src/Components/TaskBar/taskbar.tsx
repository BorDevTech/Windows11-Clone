import * as CUR from "@chakra-ui/react";
import AppButton from "../Buttons/AppButton/AppButton";

const Taskbar = () => {
  return (
    <CUR.HStack justifyContent={"center"} mt={2} mb={2}>
      <AppButton Name="Start" NameTag />
      <AppButton Name="Search" NameTag />
      <AppButton Name="Desktop" NameTag />
      <AppButton Name="Chat" NameTag />
      <AppButton Name="Store" NameTag />
      <AppButton Name="Calculator" NameTag />
      <AppButton Name="Notes" NameTag />
      <AppButton Name="To Do's" NameTag />
    </CUR.HStack>
  );
};

export default Taskbar;
