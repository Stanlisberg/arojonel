import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex">
      <div className='w-[50%]'>
        <Image
          alt="search"
          height="20"
          src="/contact/outdoor.jpg"
          className="w-full object-cover h-[120vh]"
          width="500"
        />
      </div>
      <div className='w-[50%]'>
        lorem100 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo quae suscipit dolorem harum. Odio molestiae voluptatibus
        itaque exercitationem magnam fugit illum, repellendus corporis.
        Perspiciatis nobis nihil quisquam sapiente nemo dolorum culpa animi
        numquam, eveniet aperiam ab accusamus eligendi eaque voluptatum qui
        tenetur ipsam optio exercitationem praesentium velit quasi magni rerum,
        nam sed! Ut dolor repellat fugiat odio libero magnam distinctio
        doloribus sapiente eos suscipit magni, architecto quod voluptatibus
        pariatur consectetur dolores molestiae itaque sit deserunt? Nostrum
        dolore id veritatis, distinctio iusto corrupti asperiores tempore
        adipisci, accusantium reiciendis saepe repellendus eligendi recusandae
        neque repudiandae facilis vero ex ut, ipsam non ad?
      </div>
    </div>
  );
}

export default Contact;
