import * as CUR from "@chakra-ui/react";

const RecommendedApps = () => {
  let recommendedApps = [];
  for (let i = 0; i < 8; i++) {
    recommendedApps.push(
      <CUR.GridItem as={CUR.Box} p={2} key={i}>
        <CUR.Button textAlign={"right"} h={"55px"} w={"275px"}>
          {i}
        </CUR.Button>
      </CUR.GridItem>
    );
  }
  return (
    <>
      <CUR.Text fontWeight={"bold"} fontSize={"sm"}>
        Recommended Apps
      </CUR.Text>
      <CUR.Grid templateColumns={`repeat(2,1fr)`}>
        {recommendedApps}
        {/* Render 8 Sponsored Apps from ../Backend as GridItems*/}
      </CUR.Grid>
    </>
  );
};

export default RecommendedApps;
