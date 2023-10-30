import * as CUR from "@chakra-ui/react";
import { useState } from "react";

const OpenApp = () => {
  const { isOpen, onOpen, onClose } = CUR.useDisclosure();
  return (
    <>
      <CUR.Button onClick={onOpen}>openApp</CUR.Button>
      <CUR.Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <CUR.ModalOverlay height={"100%"} />
        <CUR.ModalContent>
          <CUR.ModalHeader>APP OPENED</CUR.ModalHeader>
          <CUR.ModalCloseButton />
          <CUR.ModalBody>dadwadwd</CUR.ModalBody>
        </CUR.ModalContent>
      </CUR.Modal>
    </>
  );
};
const AppWindow = () => {
  type WindowSize = { width: number; height: number };
  const [appWindowSize, setAppWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  return (
    <>
      <CUR.Center>
        <CUR.Button
          onClick={() =>
            setAppWindowSize({
              ...appWindowSize,
              width: appWindowSize.width + 1,
            })
          }
        >
          window +1
        </CUR.Button>
        {appWindowSize?.width}, {appWindowSize?.height}
      </CUR.Center>
      <OpenApp />
    </>
  );
};

export default AppWindow;
