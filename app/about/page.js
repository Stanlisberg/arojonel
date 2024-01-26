import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <div>
        <Image
          alt="search"
          height="20"
          src="images/about-hero.svg"
          className="object-cover sm:h-[80vh] w-full"
          width="10"
        />
      </div>
    </div>
  );
}

export default About;
