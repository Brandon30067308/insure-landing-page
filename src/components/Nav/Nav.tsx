import { FC } from "react";
import Logo from "../common/Logo";
import MobileNav from "./MobileNav";
import breakpoints from "../../breakpoints/breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Nav: FC = () => {
  const { width } = useWindowDimensions();

  return width <= breakpoints.md ? (
    <MobileNav />
  ) : (
    <nav className="Nav w-full py-4 min-h-[80px] z-20 flex items-center shadow bg-white font-karla">
      <div className="w-full max-w-6xl xl:max-w-[80vw] mx-auto flex justify-between items-center px-8">
        <Logo />
        <div className="flex items-center">
          <a
            className="uppercase font-[700] text-grayishViolet text-[12px] sm:text-[15px]
              tracking-[0.085em] md:mr-6 mr-4 cursor-pointer transition-all ease-linear hover:text-primaryDark"
          >
            how we work
          </a>
          <a
            className="uppercase font-[700] text-grayishViolet text-[12px] sm:text-[15px]
              tracking-[0.085em] md:mr-6 mr-4 cursor-pointer transition-all ease-linear hover:text-primaryDark"
          >
            blog
          </a>
          <a
            className="uppercase font-[700] text-grayishViolet text-[12px] sm:text-[15px]
              tracking-[0.085em] md:mr-6 mr-4 cursor-pointer transition-all ease-linear hover:text-primaryDark"
          >
            account
          </a>
          <a
            className="uppercase font-[700] text-primary text-[12px] sm:text-[15px]
              tracking-[0.085em] border-[1px] border-primary p-2 cursor-pointer hover:text-white hover:bg-primaryDark transition-all
              ease-linear"
          >
            view plans
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
