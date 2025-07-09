import Image from "next/image";
import React from "react";
import imag from "../assets/gem4.jpg";

const DiamondCards = () => {
    return (
        <div className="max-w-7xl mx-auto grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-15 ">
            {/* <div className="flex justify-center items-center"> */}
            <div className="w-96 h-96 flex flex-col gap-4 m-auto shrink">
                <div className="w-96 h-64 bg-zinc-300">
                    <Image
                        src={imag}
                        alt="certficate"
                        className="object-cover w-full h-full"
                    />
                </div>

                <h2
                    className="text-2xl leading-tight font-normal  bg-gradient-to-r from-[#54330C] to-[#FFDCBB"
                    style={{
                        background:
                            "linear-gradient(to rigth, #54330C, #FFDCBB)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Playfair Display",
                    }}
                >
                    GIA CERTIFICATE
                </h2>
                <div className=" text-zinc-800/80 text-base font-light font-['Open_Sans']">
                    When purchasing a diamond, we pay close attention to its
                    grading. The grading certificate serves as the diamond’s
                    identity cardand to a...
                    <div className=" text-zinc-800/80 mt-1 text-md font-light font-['Open_Sans'] underline">
                        View All
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className="w-96 h-96 flex flex-col gap-4 m-auto shrink ">
                <div className="w-96 h-64 bg-zinc-300">
                    <Image
                        src={imag}
                        // width={360}
                        // height={10}
                        alt="Big Ring Hand"
                        className="object-cover w-full h-full"
                    />
                </div>

                <h2
                    className="text-2xl leading-tight font-normal  bg-gradient-to-r from-[#54330C] to-[#FFDCBB"
                    style={{
                        background:
                            "linear-gradient(to rigth, #54330C, #FFDCBB)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Playfair Display",
                    }}
                >
                    IGI-CERTIFICATE
                </h2>
                <div className=" text-zinc-800/80 text-base font-light font-['Open_Sans']">
                    The most authoritative diamond grading institution in the
                    world is the Gemological Institute of America (GIA). In
                    addition to GIA, there are...
                    <div className=" text-zinc-800/80 mt-1 text-md font-light font-['Open_Sans'] underline">
                        View All
                    </div>
                </div>
            </div>
            <div className="w-96 h-96 flex flex-col gap-4 m-auto shrink">
                <div className="w-96 h-64 bg-zinc-300">
                    <Image
                        src={imag}
                        // width={360}
                        // height={10}
                        alt="Big Ring Hand"
                        className="object-cover w-full h-full"
                    />
                </div>

                <h2
                    className="text-2xl leading-tight font-normal  bg-gradient-to-r from-[#54330C] to-[#FFDCBB"
                    style={{
                        background:
                            "linear-gradient(to rigth, #54330C, #FFDCBB)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Playfair Display",
                    }}
                >
                    HRD-CERTIFICATE
                </h2>
                <div className=" text-zinc-800/80 text-base font-light font-['Open_Sans']">
                    The HRD certificate is a diamond grade certificate issued by
                    the Belgian Diamond High Council. What is the Belgian
                    Diamond High Council? As...
                    <div className=" text-zinc-800/80 mt-1 text-md font-light font-['Open_Sans'] underline">
                        View All
                    </div>
                </div>
            </div>
        </div>
    );
};

// const DiamondCards = () => {
//     return <div>DiamondCards</div>;
// };

export default DiamondCards;
