"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import SmallRingImage from "../assets/Ring.jpg";
// import BigRingImage from "../assets/bangles1.jpg";
import heroImage from "../assets/hero.png";

const BestGradeSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full px-4 md:px-20 py-5 bg-white"
        >
            <div className="max-w-7xl mx-auto mt-10 ">
                <div className=" flex lg:flex-row flex-col gap-1 items-center justify-center">
                    {/* Left: Text */}
                    <div className="lg:translate-x-20">
                        <h2
                            className="text-5xl leading-tight font-normal mb-6"
                            style={{
                                background:
                                    "linear-gradient(to right, #54330C, #FFDCBB)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontFamily: "Playfair Display",
                            }}
                        >
                            Best Grade Diamond
                            <br />
                            Only at DONAI
                        </h2>

                        <p
                            className="text-base font-light leading-relaxed text-[#2E2B28] opacity-80 lg:w-50"
                            style={{ fontFamily: "Inter" }}
                        >
                            Discover DIANO&apos;s exclusive collection of rare
                            gemstones and elite jewellery — meticulously curated
                            for connoisseurs, collectors and luxury design
                            houses. Experience timeless elegance and unmatched
                            craftsmanship in every piece.
                        </p>
                    </div>

                    {/* Right: Door-shaped Images with border styling */}
                    <div className="lg:-translate-x-20">
                        {/* Small Arch Image Frame */}
                        {/* <div className="w-[400px] h-[200px] border-2 border-black rounded-t-[120px] rounded-b-none pt-3 px-3 pb-0 flex justify-center bg-white">
                            <div className="w-full h-full rounded-t-[100px] overflow-hidden relative">
                                <Image
                                    src={SmallRingImage}
                                    alt="Small Ring"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div> */}

                        {/* Large Arch Image Frame */}
                        {/* <div className="w-[600px] h-[380px] border-2 border-black rounded-t-[168px] rounded-b-none pt-4 px-4 pb-0 flex justify-center bg-white">
                            <div className="w-full h-full rounded-t-[140px] overflow-hidden relative">
                                <Image
                                    src={BigRingImage}
                                    alt="Big Ring Hand"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div> */}
                        <Image
                            src={heroImage}
                            alt="Big Ring Hand"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default BestGradeSection;
