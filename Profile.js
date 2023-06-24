import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./profile.css";
import { Link, Outlet } from "react-router-dom";
const Profile = () => {
  return (
  <>
    <Header/>    
   <div className="mainProfile">
     <div className="rectangle-parent">
      <div className="rectangle-div" />
      <div className="frame-child2" />
      <div className="frame-child3" />
      <div className="frame-child4" />
      <div className="frame-child5" />
      <div className="frame-child6" />
      <div className="frame-child7" />
      <div className="frame-child8" />
      <div className="frame-child9" />
      <button className="termofuse">
        <div className="terms-of-use">Terms of use</div>
        <img className="vector-icon5" alt="" src="/vector.svg" />
        <img className="back-arrow-icon" alt="" src="/back-arrow.svg" />
      </button>
      <Link to="/profile/help">
      <button  className="help1">
        <img className="vector-icon6" alt="" src="/vector1.svg" />
        <div className="help2">Help</div>
        <img className="back-arrow-icon1" alt="" src="/back-arrow1.svg" />
      </button>
      </Link>
      <div className="supportext">
        <div className="supportext-child" />
        <div className="support">Support</div>
      </div>
      <button className="darkmode">
        <img className="darkmode-child" alt="" src="/group-7151.svg" />
        <div className="dark-mode">Dark mode</div>
        <img className="back-arrow-icon2" alt="" src="/back-arrow.svg" />
      </button>
      <button className="notifications">
        <div className="help2">{`Notifications `}</div>
        <img className="bell-icon" alt="" src="/bell-icon.svg" />
        <img className="back-arrow-icon1" alt="" src="/back-arrow.svg" />
      </button>
      <div className="settingtext">
        <div className="settingtext-child" />
        <div className="support">Settings</div>
      </div>
      <button className="paymentmethod">
        <div className="payment-methods">Payment Methods</div>
        <img className="vector-icon7" alt="" src="/vector-icon.svg" />
        <img className="back-arrow-icon4" alt="" src="/back-arrow2.svg" />
      </button>
      <button className="deliveryaddress">
        <div className="delivery-address">Delivery Address</div>
        <img
          className="delicery-address-icon"
          alt=""
          src="/delicery-address.svg"
        />
        <img className="back-arrow-icon5" alt="" src="/back-arrow3.svg" />
      </button>
      <button className="futureshoppingcard">
        <div className="future-shopping-cart">Future shopping cart</div>
        <img className="basic-heart" alt="" src="/24--basic--heart.svg" />
        <img className="back-arrow-icon6" alt="" src="/back-arrow4.svg" />
      </button>
      <Link to="/profile/order-detail">
      <button className="orders">
        <div className="orders1">Orders</div>
        <img className="basic-heart" alt="" src="/24--shopping--tote.svg" />
        <img className="back-arrow-icon7" alt="" src="/back-arrow5.svg" />
      </button></Link>
      
    </div>
    <Outlet/>
   </div>
   <Footer/>
   </>
  );
};

export default Profile;
