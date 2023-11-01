import * as CUR from "@chakra-ui/react";

interface Props {
  Name: string;
  AppSize?: { w: string | number; h: string | number };
  AppSrc?: string;
}

const AppButton = ({ Name, AppSize }: Props) => {
  return (
    <CUR.Button
      h={AppSize?.h || "40px"}
      w={AppSize?.w || "40px"}
      style={{ border: "1px solid pink" }}
      id={Name}
    >
      <CUR.Icon justifyContent={"center"}></CUR.Icon>
    </CUR.Button>
  );
};

export default AppButton;
