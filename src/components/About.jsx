import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="mb-10 text-5xl font-bold">
        Hakkımızda
      </h2>
      <Image
        src={"https://soft-cocada-675207.netlify.app/images/about.png"}
        width={100000}
        height={100000}
        className="!w-full h-60 md:h-96 object-cover"
      />
      <p className="indent-10 text-justify mt-5 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        harum enim illum veniam, labore ipsum dolor, aspernatur et maxime velit
        aut cumque neque dolorum sit commodi ducimus esse minus impedit
        blanditiis possimus accusamus architecto sint! Deleniti voluptatum illum
        aut ipsum optio harum esse facilis? Corrupti optio ducimus saepe
        repellendus laborum nemo molestiae eius, veniam cumque odit, nisi
        aliquid sit cum iusto deleniti velit omnis aut soluta, a modi! Minima
        quae odit, ipsa magni delectus repudiandae sed officia iusto id et
        magnam. Assumenda iste sapiente commodi, atque incidunt maxime vel
        explicabo quod soluta suscipit natus laboriosam magni laborum dicta,
        omnis tempora sequi dolorum minima ipsa possimus ullam nam impedit
        quidem voluptas. Est quos nisi minus ipsa quaerat.
      </p>
    </div>
  );
};

export default About;
