import HeroBanner from "./Banner";
import GamingCategories from "./FourBox";
import Games from "./GameGrid";
import RecentWinners from "./RecentWinners";
const HomePage = () => {
  return (
    <div className="lg:px-10  px-2  py-4 space-y-6 lg:mt-4 md:mt-4  sm:mt-40 mt-30 " >
      <HeroBanner/>
      <GamingCategories/>
      <RecentWinners/>
      <Games/>
    </div>
  );
};

export default HomePage;
