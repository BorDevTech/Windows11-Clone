import * as CUR from "@chakra-ui/react";

interface Props {
  Name: any;
  AppSize?: { w: string | number; h: string | number };
  AppSrc?: string;
}

const AppButton = ({ Name, AppSize }: Props) => {
  return (
    <>
      <CUR.VStack gap={0}>
        <CUR.Button
          h={AppSize?.h || "40px"}
          w={AppSize?.w || "40px"}
          style={{ border: "1px solid pink" }}
          id={`App+${Name}`}
          as={CUR.Card}
        >
          <CUR.Icon justifyContent={"center"}></CUR.Icon>
        </CUR.Button>
        <CUR.Box w={"71px"} textAlign={"center"}>
          {Name}
        </CUR.Box>
      </CUR.VStack>
    </>
  );
};

export default AppButton;
