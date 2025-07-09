import Commitment from "./components/Commitment";
import Categories from "./components/Categories";
// import DianoApart from "./components/DianoApart";
import Connect from "./components/Connect";
import FinestDiamonds from "./components/FinestDiamonds";
import Testimonial from "./components/Testimonial";
import Collections from "./components/Collections";
import ShowGems from "./components/ShowGems";
import BestGradeSection from "./components/BestGradeSection";
import DiamondCards from "./components/DiamondCards";

export default function Home() {
    return (
        <div>
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
