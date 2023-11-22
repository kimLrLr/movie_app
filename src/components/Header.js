import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";
import { useEffect, useRef } from "react";

const SHeader = styled.header`
  width: 100vw;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  a {
    color: ${mainColors.pointColor};
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  li {
    margin-left: 50px;
  }
`;

export const Header = () => {
  const headerRef = useRef();
  // =>참조하고자하는 엘리먼트한테 변수명을 ref={}안에 넣어주면 됨!

  const scrollHandler = () => {
    // const pageY = window.pageYOffset;
    const pageY = window.scrollY;
    // => scrollY는 pageYoffset이랑 같은 효과, 그런데 최신형.
    // console.log(headerRef);
    // const current = {headerRef}

    if (pageY > 300) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
      headerRef.current.style.backdropFilter = "blur(3px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
