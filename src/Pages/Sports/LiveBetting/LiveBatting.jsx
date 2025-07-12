import SportsLiveBettingTable from './Table2';
import CryptoLiveBettingTable from './Table1';
import LiveBettingTable from "../../Home/LiveBet"
import Footer from '../../../Components/Footer';
import Loader from '../../../Components/Loader';
import DepositOfferPopup from "../../../Components/2xBonus";


const LiveBetting = () => {
  return (
    <div className="lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 " >
     <Loader>   
     <SportsLiveBettingTable/>
     <CryptoLiveBettingTable/> 
     <LiveBettingTable/>
     </Loader>
      <Footer/>
         <DepositOfferPopup/>
    </div>
  );
};

export default LiveBetting;
