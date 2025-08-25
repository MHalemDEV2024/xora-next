import Image from "next/image";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../../components/common/Button";

// Hero section component
const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* Element used for smooth scrolling to the "hero" section */}
      <Element name="hero">
        <div className="container">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-512 max-lg:max-w-388">
            
            {/* Caption text */}
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            
            {/* Main headline */}
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            
            {/* Subheading text */}
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            
            {/* Scroll link to "features" section with a button */}
            <LinkScroll to="features" offset={-100} spy={true} smooth={true}>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* Hero Image */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/hero.png"
              alt="hero"
              width={1230}
              height={700}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
