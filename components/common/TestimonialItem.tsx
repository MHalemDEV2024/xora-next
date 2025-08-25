import clsx from "clsx";
import React from "react";

// Interface for the TestimonialProps type
// This ensures type safety for the component's props
interface TestimonialProps {
  item: {
    comment: string;  // Text of the testimonial
    name: string;     // Name of the person providing the testimonial
    role: string;     // Role of the person (e.g., job title)
    avatarUrl: string; // URL of the person's avatar image
    id: string;        // Unique ID for the testimonial (not used in this example, but could be useful for keying in lists)
  };
  containerClassName?: string;  // Optional class name for additional styling
}

// Functional component for displaying a single testimonial
const TestimonialItem: React.FC<TestimonialProps> = ({ item, containerClassName }) => {
  const { comment, name, role, avatarUrl } = item; // Destructuring the props for easier access

  return (
    <div
      className={clsx(
        // Utility classes for layout and styling, including responsive design
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName // Additional classes passed as a prop
      )}
    >
      {/* Blockquote for displaying the testimonial comment */}
      <blockquote className="h6 mb-8 text-p4">
        {comment}
      </blockquote>

      {/* Container for the person’s information (name, role, avatar) */}
      <div className="flex items-center max-xl:-mr-8">
        {/* Avatar image with a circular border */}
        <div className="mr-4 size-20 shrink-0 rounded-full border-2 border-s2 p-1.5">
          <img
            src={avatarUrl}    // Avatar image URL
            alt={name}         // Alt text for accessibility
            className="size-full object-cover rounded-full" // Ensure the image is circular and properly scaled
          />
        </div>

        {/* Name and role of the person giving the testimonial */}
        <div>
          {/* Name of the person */}
          <h4 className="body-2 mb-0.5 text-p1">
            {name}
          </h4>

          {/* Role (job title) of the person */}
          <p className="small-compact uppercase text-s3">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
