import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import gem1 from "../assets/gem1.jpg";
import gem2 from "../assets/gem2.jpg";
import gem3 from "../assets/gem3.jpg";
import gem4 from "../assets/gem4.jpg";
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
        src1: gem1,
        src2: fig1,
        alt: "GEM 4",
        title: "Emerald Collection",
    },
    {
        src1: gem2,
        src2: fig2,
        alt: "GEM 5",
        title: "Diamond Series",
    },
    {
        src1: gem3,
        src2: fig3,
        alt: "GEM 6",
        title: "Ruby Selection",
    },
    {
        src1: gem4,
        src2: fig4,
        alt: "GEM 7",
        title: "Sapphire Line",
    },
];

const Collections = () => {
    return (
        <div className="max-w-7xl mx-auto mt-25 w-full">
            <h1
                className={`py-10 ${playFair.className} text-center text-5xl`}
                style={{
                    background: "linear-gradient(to right, #FFDCBB, #54330C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Finest Gems Across The City
            </h1>

            <div className="flex flex-col md:flex-row items-center">
                {Gems.map((gem, index) => (
                    <div key={index} className="w-1/2 mb-10 px-5">
                        <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <Image
                                src={gem.src1}
                                alt={gem.alt}
                                width={300}
                                height={300}
                                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/0">
                                <Image
                                    src={gem.src2}
                                    alt={gem.alt}
                                    width={300}
                                    height={300}
                                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
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
