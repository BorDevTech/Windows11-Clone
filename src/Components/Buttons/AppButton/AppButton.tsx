import * as CUR from "@chakra-ui/react";

interface Props {
  Name: any;
  NameTag: boolean;
  AppSize?: { w: string | number; h: string | number };
  AppSrc?: string;
  Logic?: () => void;
}
const AppButton = ({ Name, NameTag, AppSize, Logic }: Props) => {
  return (
    <>
      {NameTag && (
        <CUR.Tooltip label={Name}>
          <CUR.Button
            h={AppSize?.h || "40px"}
            w={AppSize?.w || "40px"}
            style={{ border: "1px solid pink" }}
            id={`App+${Name}`}
            as={CUR.Card}
            onClick={Logic}
          >
            <CUR.Icon justifyContent={"center"}></CUR.Icon>
          </CUR.Button>
        </CUR.Tooltip>
      )}
      {!NameTag && (
        <CUR.Button
          h={AppSize?.h || "40px"}
          w={AppSize?.w || "40px"}
          style={{ border: "1px solid pink" }}
          id={`App+${Name}`}
          as={CUR.Card}
          onClick={Logic}
        >
          <CUR.Icon justifyContent={"center"}></CUR.Icon>
        </CUR.Button>
      )}
    </>
  );
};

export default AppButton;
