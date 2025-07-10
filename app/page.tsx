"use client";

import React, { useState, useEffect } from "react";
import Commitment from "./components/Commitment";
import Categories from "./components/Categories";
import Connect from "./components/Connect";
import FinestDiamonds from "./components/FinestDiamonds";
import Testimonial from "./components/Testimonial";
import Collections from "./components/Collections";
import ShowGems from "./components/ShowGems";
import BestGradeSection from "./components/BestGradeSection";
import DiamondCards from "./components/DiamondCards";
import Popup from "./components/popup";

export default function Home() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    // const [hasVisited, setHasVisited] = useState<boolean>(false);

    useEffect(() => {
        // Get the current date in YYYY-MM-DD format
        const today = new Date().toISOString().split("T")[0];

        // Check if we have stored the last visit date
        const lastVisitDate = localStorage.getItem("lastPopupDate");

        // Check if user has already seen popup today (during this session)
        const sessionSeen = sessionStorage.getItem("popupSeenThisSession");

        // Show popup if:
        // 1. User hasn't seen it today (different day from last visit)
        // 2. User hasn't seen it during this browser session
        if (lastVisitDate !== today && !sessionSeen) {
            const timer = setTimeout(() => {
                setShowPopup(true);

                // Update localStorage with today's date
                localStorage.setItem("lastPopupDate", today);

                // Mark that popup has been shown in this session
                sessionStorage.setItem("popupSeenThisSession", "true");

                // setHasVisited(true);
            }, 1000); // 1 second delay

            return () => clearTimeout(timer);
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            {/* Conditionally render the Popup component */}
            {showPopup && <Popup onClose={handleClosePopup} />}

            <BestGradeSection />
            <FinestDiamonds />
            <ShowGems />
            <Categories />
            <Commitment />
            <Collections />
            {/* <DianoApart /> */}
            <DiamondCards />
            <Testimonial />
            <Connect />
        </div>
    );
}
