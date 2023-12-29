import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import { Icon } from "@iconify/react";

const Thumbnails = () => {
  const thumbnails = [
    {
      title: "Pubg",
      image:
        "/img/pubg_1.jpg",
      content: "PUBG THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "pubg",
    },
    {
      title: "Valorant",
      image:
        "/img/valorant_1.jpg",
      content: "VALORANT THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "valorant",
    },
    {
      title: "LOL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWf29xOp9i7W-OXWpfiDvIE-xa_318v7Gjyg&usqp=CAU",
      content: "LOL THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "lol",
    },
    {
      title: "Cs-Go",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSC-bvtMTQyMGfOoyf4-2bil4EABI36b9bg&usqp=CAU",
      content: "CS-GO THUMBNAİL",
      price: "99.90",
      oldPrice: "149.90",
      url: "cs_go",
    },
  ];

  return (
    <div className="bg-[#1E2029]">
      <div className="lg:w-[80%] mx-auto py-10 px-2">
        <h2 className="mb-10 text-5xl font-bold flex items-center gap-3"><Icon icon="tabler:stack-2" fontSize={48} /> Thumbnails</h2>
        <div className="grid lg:grid-cols-4 gap-4">
          {thumbnails.map((thumbnail, index) => {
            const { title, image, content, price, oldPrice, url } = thumbnail;

            return (
              <ThumbnailCard
                key={index}
                title={title}
                image={image}
                content={content}
                price={price}
                oldPrice={oldPrice}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
