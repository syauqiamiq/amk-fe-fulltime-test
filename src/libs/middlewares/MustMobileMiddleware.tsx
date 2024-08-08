import React, { ReactNode, useEffect } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";

interface IMustMobileMiddleware {
  children: ReactNode;
}

const MustMobileMiddleware = ({ children }: IMustMobileMiddleware) => {
  const navigate = useNavigate();
  const isMobile = useScreenSize({ size: 768 });

  useEffect(() => {
    if (window.innerWidth >= 768) {
      navigate("/", {
        replace: true,
      });
    }
  }, [isMobile]);

  return <>{children}</>;
};

export default MustMobileMiddleware;
