import Loader from "../../Components/Loader";
import HeroBanner from "./Banner";
import GamingCategories from "./FourBox";
import Games from "./GameGrid";
import RecentWinners from "./RecentWinners";
import LiveBettingTable from "./LiveBet"
import Footer from "../../Components/Footer";
import SlotGames from "./SlotGames";
import OriginalGames from "./OriginalGames";
import DepositOfferPopup from "../../Components/2xBonus";
const HomePage = () => {
  return (

   <div className="lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 " >
         <DepositOfferPopup/>
      <Loader >
      <HeroBanner/>
      <GamingCategories/>
      <RecentWinners/>
      <OriginalGames/>
      <Games/>
      <SlotGames/>
      <LiveBettingTable/>
      </Loader>
      <Footer/>
    </div>

  );
};

export default HomePage;
