"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Mulish } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CategoriesDropdown from "./CategoriesDropdown";
import GemstoneDropdown from "./GemstoneDropdown";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
    const Router = useRouter();
    const pathname = usePathname();

    const NavBarItems = [
        { name: "HOME", path: "/" },
        { name: "GEMSTONE", path: "/Gemstone" }, // Fixed typo
        { name: "ABOUT US", path: "/About" },
        { name: "FINE JEWELLERY", path: "/FineJewellery" },
        { name: "ACCESS INVENTORY" , path: "/Inventory"},
        { name: "CONTACT US", path: "/Contact" },
    ];

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
    const [showGemstoneDropdown, setShowGemstoneDropdown] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    // Language options
    const languages = [
        { code: "EN", name: "English" },
        { code: "FR", name: "Français" },
        { code: "NL", name: "Nederlands" },
        { code: "DE", name: "Deutsch" },
    ];

    const handleLanguageSelect = (languageCode: string) => {
        setSelectedLanguage(languageCode);
        setShowLanguageDropdown(false);
    };

    return (
        <div className="bg-white sticky top-0 z-50">
            <div
                className={`max-w-6xl mx-auto flex gap-60 lg:gap-10 justify-between items-center ${mulish.className}`}
            >
                {/* Search Bar and Language Dropdown */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <span className="absolute top-2.5 right-4">
                            <Image
                                src="search.svg"
                                alt="Search"
                                width={20}
                                height={20}
                            />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="relative border w-full border-[#C49A6C] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6C5A0] transition duration-300"
                        />
                    </div>

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() =>
                                setShowLanguageDropdown(!showLanguageDropdown)
                            }
                            className="flex items-center gap-1 px-2 py-2 border border-[#C49A6C] rounded-full hover:bg-gray-50 transition-colors duration-200"
                        >
                            <span className="text-sm font-medium text-[#2E2B28]">
                                <Image
                                    src="Lang.svg"
                                    alt="Language Icon"
                                    width={20}
                                    height={20}
                                />
                            </span>
                        </button>

                        {/* Language Dropdown Menu */}
                        <AnimatePresence>
                            {showLanguageDropdown && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -10,
                                        scale: 0.95,
                                    }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]"
                                >
                                    <div className="py-2">
                                        {languages.map((language) => (
                                            <button
                                                key={language?.code}
                                                onClick={() =>
                                                    language?.code &&
                                                    handleLanguageSelect(
                                                        language.code
                                                    )
                                                }
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                                                    selectedLanguage ===
                                                    language?.code
                                                        ? "bg-[#D6C5A0]/10 text-[#2E2B28] font-medium"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>
                                                        {language?.code}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {language?.name}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Logo Section */}
                <Link href="/">
                    <Image
                        src="Donai.svg"
                        alt="Donai Gems Logo"
                        width={500}
                        height={200}
                        draggable={false}
                        className="w-30 mt-3 lg:w-30 h-auto cursor-pointer"
                        onClick={() => Router.push("/")}
                    />
                </Link>

                {/* Right Section */}
                <div className={`hidden lg:flex gap-3 ${mulish.className}`}>
                    <button className="relative rounded-md overflow-hidden px-3 py-1 item-center text-md bg-white border border-[#2E2B28] font-light cursor-pointer hover:bg-[#C49A6CCC] hover:text-white hover:border-[#C49A6CCC] transition-all duration-300">
                        Book an Appointment
                        {/* Shine effect */}
                        <span className="pointer-events-none absolute top-0 left-[-75%] h-full w-full opacity-60 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" />
                    </button>
                </div>

                {/* Hamburger Logo */}
                <div className="lg:hidden flex gap-4">
                    <button onClick={() => setMenuOpen(!isMenuOpen)}>
                        <HiOutlineMenu size={30} />
                    </button>
                </div>
            </div>

            <div className="w-full border-t border-[#C49A6C66]" />

            <div className="flex flex-row items-center justify-center relative">
                {/* Middle Section */}
                <div
                    onMouseLeave={() => {
                        setShowCategoriesDropdown(false);
                        setShowGemstoneDropdown(false);
                    }}
                    className="relative"
                >
                    <ul className="hidden lg:flex gap-[40px] text-sm">
                        {NavBarItems.map((item) => {
                            if (item.name === "ABOUT US") {
                                return (
                                    <div key={item.path}>
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
                                            onClick={() => {
                                                Router.push(`${item.path}`);
                                            }}
                                            onMouseEnter={() =>
                                                setShowAboutDropdown(
                                                    !showAboutDropdown
                                                )
                                            }
                                        >
                                            {item.name}
                                        </li>
                                    </div>
                                );
                            }
                            return (
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
                                        if (item.name === "GEMSTONE") {
                                            setShowGemstoneDropdown(true);
                                            setShowCategoriesDropdown(false);
                                        } else if (
                                            item.name === "FINE JEWELLERY"
                                        ) {
                                            setShowCategoriesDropdown(true);
                                            setShowGemstoneDropdown(false);
                                        } else {
                                            setShowCategoriesDropdown(false);
                                            setShowGemstoneDropdown(false);
                                        }
                                    }}
                                    onClick={() => {
                                        if (
                                            item.name !== "GEMSTONE" &&
                                            item.name !== "FINE JEWELLERY"
                                        ) {
                                            Router.push(`${item.path}`);
                                        }
                                    }}
                                >
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Categories Dropdown */}
                    <CategoriesDropdown
                        showCategoriesDropdown={showCategoriesDropdown}
                        setShowCategoriesDropdown={setShowCategoriesDropdown}
                    />

                    {/* Gemstone Dropdown */}
                    <GemstoneDropdown
                        showGemstoneDropdown={showGemstoneDropdown}
                        setShowGemstoneDropdown={setShowGemstoneDropdown}
                    />
                </div>
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
