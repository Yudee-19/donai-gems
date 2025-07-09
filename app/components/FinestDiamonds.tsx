import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
// import StarIcon from "../assets/star.png";
import gem1 from "../assets/gem1.jpg";
import gem2 from "../assets/gem2.jpg";
import gem3 from "../assets/gem3.jpg";
import gem4 from "../assets/gem4.jpg";

const playFair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Gems = [
    {
        src: gem1,
        alt: "GEM 4",
    },
    {
        src: gem2,
        alt: "GEM 5",
    },
    {
        src: gem3,
        alt: "GE4 6",
    },
    {
        src: gem4,
        alt: "GEM 7",
    },
];

const Collections = () => {
    return (
        <div className="max-w-7xl mx-auto mt-25 w-full">
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
                Finest Gems Across The City{" "}
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
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <button className="border font-light hover:bg-[#2E2B28] hover:text-[#FFFFFF] duration-300 px-6 py-2">
                    EXPLORE COLLECTION
                </button>
            </div>
        </div>
    );
};

export default Collections;
