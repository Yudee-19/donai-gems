import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
// import StarIcon from "../assets/star.png";
import fig1 from "../assets/fig1.jpg";
import fig2 from "../assets/fig2.jpg";
import fig3 from "../assets/fig3.jpg";
import fig4 from "../assets/fig4.jpg";

const playFair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Gems = [
    {
        src: fig1,
        alt: "GEM 4",
        desc: "Gem Ear Ring",
    },
    {
        src: fig2,
        alt: "GEM 5",
        desc: "Pendant",
    },
    {
        src: fig3,
        alt: "GE4 6",
        desc: "Ruby Ring",
    },
    {
        src: fig4,
        alt: "GEM 7",
        desc: "Emerald Ring",
    },
];

const Categories = () => {
    return (
        <div className="max-w-5xl mx-auto mt-25 w-full">
            {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-395 left-30" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-400 right-30" /> */}
            {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-510 right-155" /> */}
            <h1
                className={`py-10 ${playFair.className} text-center text-5xl`}
                style={{
                    background: "linear-gradient(to right, #FFDCBB, #54330C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Categories Of Gem We Sell{" "}
            </h1>
            <div className="flex flex-col md:flex-row items-center">
                {Gems.map((gem, index) => (
                    <div key={index} className="w-1/2 mb-10 px-5">
                        <Image
                            src={gem.src}
                            alt={gem.alt}
                            width={300}
                            height={300}
                            className="w-full object-cover"
                        />
                        <p className="text-center mt-2 text-xl text-[#000000]">
                            {gem.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
