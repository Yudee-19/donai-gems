import React from "react";
import Image from "next/image";
import InstagramImage from "../assets/instagram.png";

const InstagramSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-10 mt-10">
            <div className="flex flex-col md:flex-row justify-around max-w-4xl mx-auto items-center">
                <div className="md:w-100">
                    <h1
                        className="md:text-5xl text-3xl font-normal font-['Playfair_Display'] "
                        style={{
                            background:
                                "linear-gradient(to right, #54330C, #FFDCBB)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: "Playfair Display",
                        }}
                    >
                        Visit our Instagram for detailed information
                    </h1>
                    <a
                        href="#"
                        className=" my-5 md:px-7 px-3 py-2 rounded-sm shadow-[0px_2px_12px_0px_rgba(0,0,0,0.12)]  outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center "
                    >
                        <div className="justify-start text-zinc-800 text-base font-normal font-['Open_Sans']">
                            VISIT NOW
                        </div>
                    </a>
                </div>
                <div>
                    <Image
                        src={InstagramImage}
                        alt={"InstagramImage"}
                        width={700}
                        height={496}
                        className=" object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default InstagramSection;
