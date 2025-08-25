import { Element } from 'react-scroll';
import { faq } from '../../constants';
import FaqIteam from '../../components/common/FaqIteam';

// Functional component for rendering the FAQ section
const Faq = () => {
  // Calculate the halfway point of the FAQ array to split it into two halves
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      {/* Element used for smooth scrolling navigation, referencing the "faq" section */}
      <Element name="faq" className="relative">
        
        {/* Main container for the FAQ section */}
        <div className="container relative z-2 py-28">
          
          {/* Heading and description of the FAQ section */}
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn’t kill the cat, it got answers.
            </h3>

            <p className="body-1 max-lg:max-w-sm">
              You’ve got questions, we’ve got answers.
            </p>
          </div>

          {/* Decorative line for visual separation */}
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2"/>
        </div>

        {/* Glow effect around the FAQ content */}
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          
          {/* Container for displaying the FAQ items in two columns */}
          <div className="container flex gap-10 max-lg:block">
            
            {/* Logo positioned at the top center */}
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>
            
            {/* First column for the first half of the FAQ items */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <div key={item.id} className="faq-item_first relative mb-10 max-lg:mb-8">
                  <FaqIteam item={item} index={index} />
                </div>
              ))}
            </div>

            {/* Second column for the second half of the FAQ items */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <div key={item.id} className="faq-item_first relative mb-10 max-lg:mb-8">
                  <FaqIteam item={item} index={halfLength + index} />
                </div>
              ))}
            </div>

          </div>

          {/* Decorative line for visual separation in larger screens */}
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>

      </Element>
    </section>
  );
};

export default Faq;
