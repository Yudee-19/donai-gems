import Image from "next/image";
import React from "react";

const DiamondCard = () => {
    return (
        <div className="w-108 h-108 flex-col bg-red-400">
            <Image
                src={"../assets/gem4.jpg"}
                alt="Big Ring Hand"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
};

// const DiamondCards = () => {
//     return <div>DiamondCards</div>;
// };

export default DiamondCard;
