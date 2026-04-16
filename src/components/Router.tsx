import React, { useState, useEffect } from "react";

interface RouterProps {
  children: React.ReactNode;
}

export interface RouteParams {
  currentRoute: string;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentRoute(path);
  };

  const getParams = () => {
    const pathParts = currentRoute.split("/");
    const params: Record<string, string> = {};

    if (pathParts[1] === "servico" && pathParts[2]) {
      params.serviceId = pathParts[2];
    }

    return params;
  };

  const routeProps: RouteParams = {
    currentRoute,
    navigate,
    params: getParams(),
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, routeProps)
          : child
      )}
    </div>
  );
};

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentRoute(path);
  };

  const getParams = () => {
    const pathParts = currentRoute.split("/");
    const params: Record<string, string> = {};

    if (pathParts[1] === "servico" && pathParts[2]) {
      params.serviceId = pathParts[2];
    }

    return params;
  };

  return {
    currentRoute,
    navigate,
    params: getParams(),
  };
};
