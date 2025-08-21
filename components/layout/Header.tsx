import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Navlink = ({ title }: { title: string }) => (
  <LinkScroll
    to={title}
    smooth
    offset={-80}
    duration={500}
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container mx-auto flex h-14 items-center max-lg:px-5">
        {/* Logo - Mobile */}
        <a className="lg:hidden flex-1 cursor-pointer z-10">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        {/* Navigation */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 transition-opacity duration-300",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:p-4">
            <nav className="max-lg:relative max-lg:z-10 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-0">

                {/* Left Links */}
                <li className="nav-li">
                  <Navlink title="features" />
                  <div className="dot" />
                  <Navlink title="Pricing" />
                </li>

                {/* Center Logo */}
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img src="/images/xora.svg" width={160} height={55} alt="logo" />
                  </LinkScroll>
                </li>

                {/* Right Links */}
                <li className="nav-li">
                  <Navlink title="faq" />
                  <div className="dot" />
                  <Navlink title="Download" />
                </li>
              </ul>
            </nav>

            {/* Background Decoration (Mobile) */}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] -translate-x-[290px] -translate-y-1/2 rotate-90">
              <img
                src="images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-10"
              />
              <img
                src="images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline fill"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden z-10 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt={isOpen ? "Close menu" : "Open menu"}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
