import { useEffect, useState, memo } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

type NavlinkProps = {
  title: string;
};

const Navlink = memo(({ title }: NavlinkProps) => (
  <LinkScroll
    to={title.toLowerCase()}
    smooth
    spy={true}
    offset={-100}
    activeClass="nav-active"
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
));
Navlink.displayName = "Navlink";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        hasScrolled ? "py-2 bg-black-100 backdrop-blur-[8px]" : "py-10 max-lg:py-4"
      )}
    >
      <div className="container mx-auto flex h-14 items-center max-lg:px-5">
        {/* Logo - Mobile */}
        <a
          href="#hero"
          className="lg:hidden flex-1 cursor-pointer z-10"
          aria-label="Go to homepage"
        >
          <Image
            src="/images/xora.svg"
            width={115}
            height={55}
            alt="Xora logo"
            priority
          />
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
              <ul className="flex items-center justify-center gap-8 max-lg:block max-lg:px-0">
                {/* Left Links */}
                <li className="nav-li flex items-center gap-2 ">
                  <Navlink title="Features" />
                  <span className="dot" />
                  <Navlink title="Pricing" />
                </li>

                {/* Center Logo */}
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <Image
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="Xora logo"
                      priority
                    />
                  </LinkScroll>
                </li>

                {/* Right Links */}
                <li className="nav-li flex items-center gap-2">
                  <Navlink title="FAQ" />
                  <span className="dot" />
                  <Navlink title="Download" />
                </li>
              </ul>
            </nav>

            {/* Background Decoration (Mobile) */}
            <div className="lg:hidden absolute top-1/2 left-0 w-[960px] h-[380px] -translate-x-[290px] -translate-y-1/2 rotate-90">
              <Image
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-10"
              />
              <Image
                src="/images/bg-outlines-fill.png"
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
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden z-10 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt={isOpen ? "Close menu" : "Open menu"}
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
