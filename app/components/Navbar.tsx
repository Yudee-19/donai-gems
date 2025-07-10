"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Mulish } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import allJewelry from "../assets/allJewelery.png";
import bracelet from "../assets/bracelete.png";
import fingerRing from "../assets/fingerRing.png";
import necklace from "../assets/necklace.png";
import necklaceSet from "../assets/necklaceSet.png";
import pendants from "../assets/pendants.png";
import featureImg from "../assets/featureImg.jpg";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
    const Router = useRouter();
    const pathname = usePathname();

    const NavBarItems = [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "About Us", path: "/About" },
        { name: "Contact Us", path: "/Contact" },
    ];

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

    // Categories data with proper images
    const categoryData = {
        filters: [
            { label: "Category", active: true },
            { label: "Price", active: false },
            { label: "Occasion", active: false },
            { label: "Gender", active: false },
        ],
        items: [
            {
                section: 1,
                categories: [
                    { name: "All Jewelry", image: allJewelry },
                    { name: "Finger Rings", image: fingerRing },
                ],
            },
            {
                section: 2,
                categories: [
                    { name: "Necklaces", image: necklace },
                    { name: "Bracelets", image: bracelet },
                ],
            },
            {
                section: 3,
                categories: [
                    { name: "Pendants", image: pendants },
                    { name: "Necklace Set", image: necklaceSet },
                ],
            },
        ],
    };

    const handleCategoryClick = (categoryName: string) => {
        Router.push(
            `/categories/${categoryName.toLowerCase().replace(/\s+/g, "-")}`
        );
        setShowCategoriesDropdown(false);
    };

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div
                className={`max-w-6xl mx-auto flex gap-60 lg:gap-10 p-4 justify-around`}
            >
                {/* Search Bar */}
                <div className="hidden lg:block">
                    <span className="relative ">
                        <span className="absolute top-0.5 right-5">
                            <Image
                                src="search.svg"
                                alt="Search Icon"
                                width={20}
                                height={20}
                                className="text-gray-500 "
                            />
                        </span>

                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-10 relative border w-full border-[#2e2b287a] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6C5A0] transition duration-300"
                        />
                    </span>
                </div>

                {/* Logo Section */}
                <a href="/">
                    <Image
                        src="Donai.svg"
                        alt="Donai Gems Logo"
                        width={500}
                        height={200}
                        draggable={false}
                        className="w-30 lg:w-35 h-auto cursor-pointer "
                        onClick={() => Router.push("/")}
                    />
                </a>

                {/* Right Section */}
                <div
                    className={`hidden lg:flex gap-3 py-2 ${mulish.className}`}
                >
                    <button className="px-3 item-center text-md text-[#2E2B28] font-light cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300">
                        Our Collection
                    </button>
                    <button className="px-3 item-center text-md text-[#2E2B28] shadow-[0px_0px_40px_0px_rgba(255,229,199,0.50)] bg-[#FFE5C7] font-light cursor-pointer hover:scale-110  transition-all duration-300 animate-pulse rounded-md">
                        Book an Appointment
                    </button>
                </div>

                {/* Hamburger Logo */}
                <div className="lg:hidden flex gap-4">
                    <button onClick={() => setMenuOpen(!isMenuOpen)}>
                        <HiOutlineMenu size={30} />
                    </button>
                </div>
            </div>

            <div className="w-full border-t border-[#2E2B28] opacity-30 " />

            <div className="flex flex-row items-center justify-center relative">
                {/* Middle Section */}
                <ul className="hidden lg:flex gap-[40px] text-sm">
                    {NavBarItems.map((item) => (
                        <li
                            key={item.path}
                            className={`py-3 relative cursor-pointer ${
                                mulish.className
                            } text-md ${
                                pathname === `${item.path}`
                                    ? "text-[#D6C5A0]"
                                    : "text-[#2E2B28] hover:text-[#D6C5A0]"
                            }`}
                            style={{ fontWeight: 300 }}
                            onMouseEnter={() => {
                                if (item.name === "Categories") {
                                    setShowCategoriesDropdown(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.name === "Categories") {
                                    setShowCategoriesDropdown(false);
                                }
                            }}
                            onClick={() => {
                                if (item.name !== "Categories") {
                                    Router.push(`${item.path}`);
                                }
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Categories Dropdown */}
                <AnimatePresence>
                    {showCategoriesDropdown && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 z-40"
                            onMouseEnter={() => setShowCategoriesDropdown(true)}
                            onMouseLeave={() =>
                                setShowCategoriesDropdown(false)
                            }
                        >
                            <div className="w-[1000px] py-6 bg-white shadow-[0px_20px_30px_0px_rgba(0,0,0,0.15)] rounded-lg border border-gray-100">
                                <div className="flex justify-center items-start gap-10 px-6">
                                    {/* Left Filters Section */}
                                    <div className="flex flex-col justify-start items-start gap-4">
                                        {categoryData.filters.map(
                                            (filter, index) => (
                                                <motion.div
                                                    key={filter.label}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.05,
                                                    }}
                                                    className={`p-2.5 rounded ${
                                                        filter.active
                                                            ? "bg-[#D6C5A0] px-3 shadow-md"
                                                            : "bg-white hover:bg-gray-50"
                                                    } cursor-pointer transition-all duration-200`}
                                                >
                                                    <div
                                                        className={`text-sm font-light ${
                                                            mulish.className
                                                        } ${
                                                            filter.active
                                                                ? "text-white"
                                                                : "text-[#2E2B28]"
                                                        }`}
                                                    >
                                                        {filter.label}
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </div>

                                    {/* Vertical Separator */}
                                    <div className="w-px h-48 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                                    {/* Categories Grid */}
                                    <div className="flex justify-center items-start gap-14">
                                        {categoryData.items.map(
                                            (section, sectionIndex) => (
                                                <div key={sectionIndex}>
                                                    <div className="flex flex-col justify-center items-start gap-6">
                                                        {section.categories.map(
                                                            (
                                                                category,
                                                                categoryIndex
                                                            ) => (
                                                                <motion.div
                                                                    key={
                                                                        category.name
                                                                    }
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 20,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    transition={{
                                                                        delay:
                                                                            sectionIndex *
                                                                                0.1 +
                                                                            categoryIndex *
                                                                                0.05,
                                                                    }}
                                                                    className="flex justify-start items-center gap-3 cursor-pointer group"
                                                                    onClick={() =>
                                                                        handleCategoryClick(
                                                                            category.name
                                                                        )
                                                                    }
                                                                >
                                                                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                                                        <Image
                                                                            src={
                                                                                category.image
                                                                            }
                                                                            alt={
                                                                                category.name
                                                                            }
                                                                            width={
                                                                                40
                                                                            }
                                                                            height={
                                                                                40
                                                                            }
                                                                            className="object-cover w-full h-full"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className={`text-sm font-light ${mulish.className} text-[#2E2B28] group-hover:text-[#D6C5A0] transition-colors duration-200`}
                                                                    >
                                                                        {
                                                                            category.name
                                                                        }
                                                                    </div>
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </div>
                                                    {/* {sectionIndex <
                                                        categoryData.items
                                                            .length -
                                                            1 && (
                                                        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-6"></div>
                                                    )} */}
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Vertical Separator */}
                                    <div className="w-px h-48 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                                    {/* Right Image Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-col justify-end items-start gap-4"
                                    >
                                        <div className="w-48 cursor-pointer h-48 rounded-lg overflow-hidden relative group">
                                            <Image
                                                src={featureImg}
                                                alt="Featured Collection"
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                                <div className="text-white text-lg font-light">
                                                    Featured
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className={`text-[#2E2B28] text-lg font-light ${mulish.className} underline hover:text-[#D6C5A0] transition-colors duration-200`}
                                            onClick={() =>
                                                Router.push("/categories")
                                            }
                                        >
                                            Explore Now
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 transform transition-all duration-300 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-base">Menu</h2>
                    <button onClick={() => setMenuOpen(false)}>
                        <HiOutlineX size={30} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col ml-5 gap-3 text-lg">
                    {NavBarItems.map((item) => (
                        <li
                            key={item.path}
                            onClick={() => Router.push(`${item.path}`)}
                            className={`py-3 relative cursor-pointer ${
                                pathname === `${item.path}`
                                    ? "text-[#D6C5A0]"
                                    : "text-black hover:text-[#D6C5A0]"
                            }`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
