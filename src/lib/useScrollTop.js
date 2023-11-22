import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  //   const loc = useLocation();
  const { pathname } = useLocation();
  //   => 현재 페이지의 경로 내용을 객체로 반환하는 훅

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return;
};
