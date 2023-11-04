import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { namedRoutes } from "../Routes/RouteList";

export const autoLoadApp = () => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  namedRoutes;

  const checkRoute = (path: any) => {
    window.removeEventListener("onload", () => {
      for (let i = 0; i < namedRoutes.length; i++) {
        if (path.pathname === namedRoutes[i].path) {
          setActive(!isActive);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("load", () => checkRoute(location));
  }, [namedRoutes]);
  return isActive;
};

export default autoLoadApp;
