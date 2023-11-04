import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { RouteList } from "../../Routes/RouteList";

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
  const navigate = useNavigate();

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
          <CUR.VStack>
            {/* App <CUR.Icon /> */}
            <CUR.Grid
              templateColumns={`repeat( 4,1fr)`}
              templateRows={`repeat(1,1fr)`}
            >
              <CUR.GridItem colSpan={1} rowSpan={1}>
                <CUR.ModalHeader>{index}</CUR.ModalHeader>
              </CUR.GridItem>
              <CUR.GridItem>
                <CUR.Spacer />
                <CUR.Spacer />
              </CUR.GridItem>
              <CUR.GridItem colSpan={1} rowSpan={1}>
                <CUR.HStack spacing={0}>
                  {" "}
                  <CUR.Center>
                    <CUR.IconButton
                      variant={"ghost"}
                      size={"sm"}
                      aria-label="Search database"
                      icon={<CUI.MinusIcon />}
                      borderRadius={0}
                      isDisabled
                    />
                    <CUR.IconButton
                      variant={"ghost"}
                      size={"sm"}
                      aria-label="Search database"
                      icon={<CUI.CopyIcon />}
                      transform={"rotate(90deg)"}
                      borderRadius={0}
                      isDisabled
                    />

                    <CUR.ModalCloseButton
                      position={"unset"}
                      _hover={{ bg: "red.500" }}
                      borderRadius={0}
                      onClick={() => navigate("/Windows11-Clone/")}
                    />
                  </CUR.Center>
                </CUR.HStack>
              </CUR.GridItem>
            </CUR.Grid>

            <CUR.ModalBody>
              <RouteList />
              {index}
              {"AppSrc"}
            </CUR.ModalBody>
          </CUR.VStack>
        </CUR.ModalContent>
      </CUR.Modal>
    </>
  );
};

export default AppDisplay;
