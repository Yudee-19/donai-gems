import Image from "next/image";
import React from "react";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// Certificate data array
const certificateData = [
    {
        id: 1,
        image: cert1,
        title: "GIA CERTIFICATE",
        description:
            "When purchasing a gems, we pay close attention to its grading. The grading certificate serves as the gems identity card and to a...",
        alt: "GIA Certificate",
    },
    {
        id: 2,
        image: cert2,
        title: "IGI-CERTIFICATE",
        description:
            "The most authoritative gems grading institution in the world is the Gemological Institute of America (GIA). In addition to GIA, there are...",
        alt: "IGI Certificate",
    },
    {
        id: 3,
        image: cert3,
        title: "HRD-CERTIFICATE",
        description:
            "The HRD certificate is a gems grade certificate issued by the Belgian Gems High Council. What is the Belgian Gems High Council? As...",
        alt: "HRD Certificate",
    },
];

const DiamondCards = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-15">
            {certificateData.map((certificate) => (
                <div
                    key={certificate.id}
                    className="w-96 h-96 flex flex-col gap-4 m-auto shrink "
                >
                    {/* Certificate Image */}
                    <div className="w-96 h-64 bg-zinc-300 rounded-lg overflow-hidden">
                        <Image
                            src={certificate.image}
                            alt={certificate.alt}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Certificate Title */}
                    <h2
                        className={`text-2xl leading-tight font-normal ${playfairDisplay.className}`}
                        style={{
                            background:
                                "linear-gradient(to right, #54330C, #FFDCBB)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {certificate.title}
                    </h2>

                    {/* Certificate Description */}
                    <div
                        className={`text-zinc-800/80 text-base font-light ${openSans.className}`}
                    >
                        {certificate.description}
                        <div
                            className={`text-zinc-800/80 mt-1 text-md font-light ${openSans.className} underline cursor-pointer hover:text-zinc-800 transition-colors`}
                        >
                            View All
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiamondCards;
