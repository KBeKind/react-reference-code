import React from "react";
// you can use custom layouts and they trickle down to the children folders
const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      THIS IS THE CUSTOM ABOUT LAYOUT
      {children}
    </div>
  );
};

export default AboutLayout;
