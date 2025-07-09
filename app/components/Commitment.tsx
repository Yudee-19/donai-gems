import React from "react";
import { Playfair_Display, Mulish } from "next/font/google";
import Image from "next/image";
// import StarIcon from "../assets/star.png";
import gem8 from "../assets/blue.jpg";

const playFair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Commitment = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 bg-[#FAF8F2] mt-20 lg:mt-30">
            {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-560 left-10" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-590 left-160" />
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-650 left-60" /> */}
            {/* Info Section */}
            <div className="max-w-xl mx-auto mt-20 text-center md:text-left">
                <h1
                    className={`${playFair.className} text-[#2E2B28] text-5xl text-center md:text-left`}
                    style={{
                        background:
                            "linear-gradient(to right, #D6BFA6, #8B6C4A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    A Commitment to Craft and Consciousness
                </h1>
                <p
                    className={`${mulish.className} text-xl text-[#2E2B28CC] font-light mt-8 mb-8 text-center md:text-left`}
                >
                    Every gem is ethically sourced, every piece expertly curated
                    — designed not just to reflect beauty, but to transcend
                    trends and time.
                </p>

                <button className="text-[#2E2B28] border border-[#2E2B28] px-2 py-1">
                    GET IN TOUCH WITH US
                </button>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
                <Image
                    src={gem8}
                    alt="Commitment Gem"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Commitment;
