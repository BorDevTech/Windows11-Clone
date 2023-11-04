import { Route, Routes } from "react-router";
import { Start } from ".";
import { Link } from "react-router-dom";
import * as CUR from "@chakra-ui/react";
import OpenApp from "../Logic/openModals";

interface Props {
  portal: any;
}
const namedRoutes = [
  { path: "/Windows11-Clone/app/Start", element: <Start /> },
  { path: "/Windows11-Clone/app/1", element: <Start /> },
  { path: "/Windows11-Clone/app/2", element: <Start /> },
  { path: "/Windows11-Clone/app/3", element: <Start /> },
  { path: "/Windows11-Clone/app/4", element: <Start /> },
  { path: "/Windows11-Clone/app/5", element: <Start /> },
  { path: "/Windows11-Clone/app/6", element: <Start /> },
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
        <OpenApp portal={portal} index={index.path} position={"Desktop"} />
      </CUR.GridItem>
    </Link>
  ));
  return linkList;
};

const DistributedDesktopApps = ({ portal }: Props) =>
  distributeDesktopApps(namedRoutes, portal);

export { namedRoutes, RouteList, DistributedDesktopApps };
