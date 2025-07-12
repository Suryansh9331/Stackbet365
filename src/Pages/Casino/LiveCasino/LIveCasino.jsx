import LiveCasinoGames from './LiveCasinoGames';
import Footer from '../../../Components/Footer';
import Loader from '../../../Components/Loader';
import DepositOfferPopup from "../../Components/2xBonus";

const LiveCasino = () => {
  return (
    <div className="lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 " >
       <DepositOfferPopup/>
     <Loader>   
     <LiveCasinoGames/>
    </Loader>
      <Footer/>
    </div>
  );
};

export default LiveCasino;
