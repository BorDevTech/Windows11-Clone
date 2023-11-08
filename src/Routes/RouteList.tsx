import { Route, Routes } from "react-router";
import { Start, Notes, Search, ToDos, Store, Chat, Calculator } from ".";
import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";
import OpenApp from "../Logic/openModals";

interface Props {
  portal: any;
}
const namedRoutes = [
  { path: "/Windows11-Clone/app/Start", element: <Start /> },
  { path: "/Windows11-Clone/app/Notes", element: <Notes /> },
  { path: "/Windows11-Clone/app/Search", element: <Search /> },
  { path: "/Windows11-Clone/app/ToDos", element: <ToDos /> },
  { path: "/Windows11-Clone/app/Store", element: <Store /> },
  { path: "/Windows11-Clone/app/Chat", element: <Chat /> },
  { path: "/Windows11-Clone/app/Calculator", element: <Calculator /> },
];

const RouteList = () => {
  return (
    <>
      <Routes>
        {namedRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </>
  );
};
const distributeDesktopApps = (
  array: { path: string; element: JSX.Element }[],
  portal: any
) => {
  const linkList = array.map((index) => (
    <Link to={index.path} key={index.path}>
      <CUR.GridItem rowSpan={1} colSpan={1}>
        <OpenApp
          portal={portal}
          index={index.element.type.name}
          position={"Desktop"}
        />
      </CUR.GridItem>
    </Link>
  ));
  return linkList;
};

const DistributedDesktopApps = ({ portal }: Props) =>
  distributeDesktopApps(namedRoutes, portal);

export { namedRoutes, RouteList, DistributedDesktopApps };
