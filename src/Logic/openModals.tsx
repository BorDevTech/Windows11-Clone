import * as CUR from "@chakra-ui/react";
import DesktopButton from "./../Components/Buttons/DesktopButton/DesktopButton";
import AppButton from "../Components/Buttons/AppButton/AppButton";
import AppDisplay from "./../Components/AppDisplay/AppDisplay";

interface Props {
  portal: any;
  index: any;
  position: "Desktop" | "Taskbar";
}

const OpenApp = ({ portal, index, position }: Props) => {
  const { isOpen, onOpen, onClose } = CUR.useDisclosure();
  return (
    <>
      {position === "Desktop" ? (
        <DesktopButton index={index} Logic={onOpen} />
      ) : (
        <AppButton Name={index} NameTag Logic={onOpen} />
      )}

      <CUR.Portal containerRef={portal}>
        <AppDisplay
          isOpen={isOpen}
          onClose={onClose}
          portal={portal}
          index={index}
        />
      </CUR.Portal>
    </>
  );
};
export default OpenApp;
