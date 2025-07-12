
import Footer from '../../../Components/Footer';
import SlotsGames from './SlotsGames';
import Loader from '../../../Components/Loader';
import DepositOfferPopup from "../../../Components/2xBonus";

const Slots = () => {
  return (
    <div className="lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 " >
        <DepositOfferPopup/>
      <Loader>   
     <SlotsGames/>
     </Loader>
      <Footer/>
    </div>
  );
};

export default Slots;
