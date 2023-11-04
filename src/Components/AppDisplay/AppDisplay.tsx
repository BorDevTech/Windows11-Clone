import * as CUR from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  portal: any;
  index: any;
  AppSrc?: JSX.Element;
}

const AppDisplay = ({
  isOpen,
  onClose,
  portal,
  index,
}: //  AppSrc
Props) => {
  return (
    <>
      <CUR.Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size={" "}
      >
        <CUR.ModalOverlay height={portal.current?.clientHeight} />
        <CUR.ModalContent
          p={0}
          m={0}
          borderRadius={0}
          height={portal.current?.clientHeight}
        >
          <CUR.ModalHeader>{index}</CUR.ModalHeader>
          <CUR.ModalCloseButton />
          <CUR.ModalBody>
            {index}
            {"AppSrc"}
          </CUR.ModalBody>
        </CUR.ModalContent>
      </CUR.Modal>
    </>
  );
};

export default AppDisplay;
