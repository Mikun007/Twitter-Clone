import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { CiSearch, CiCircleMore } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaMessage, FaRocketchat, FaXTwitter } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import { GiEgyptianProfile } from "react-icons/gi";

const Nav = () => {
    return ( 
        <>
            <nav>
                <div className="navXicon hoverEfectNav">
                    <Link to="/" ><FaXTwitter size={32}/></Link>
                </div>
                <div className="upperNav" style={{display: "flex", flexDirection: "column"}}>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><FaHome size={28}/> <span className="text">Home</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><CiSearch size={28}/><span className="text">Explore</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><IoIosNotifications size={28}/><span className="text">Notification</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><FaMessage size={28}/><span className="text">Messages</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><FaRocketchat size={28}/><span className="text">Grok</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><RiUserCommunityFill size={28}/><span className="text">Communities</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><FaXTwitter size={28}/><span className="text">Premium</span></span></Link>
                    <Link to="/Profile" className="hoverEfectNav"><span className="navIcoAndTxt"> <BsPerson size={28}/> <span className="text">Profile</span></span></Link>
                    <Link to="/" className="hoverEfectNav"><span className="navIcoAndTxt"><CiCircleMore size={28}/><span className="text">More</span></span></Link>
                </div>

                <button><span className="text">Post</span></button>
                <div className="navXicon hoverEfectNav" style={{paddingTop: 0}}>
                    <Link className="logout" to="/" style={{alignSelf: "center"}}><div style={{flex: 1}}><img src="../public/profile.svg" alt="img" style={{width: "60%", borderRadius: "50%"}}/></div><div style={{flex: 2}}>Mikun Das</div> <div style={{flex: 1}}><CiCircleMore size={24}/></div></Link>
                </div>

            </nav>
        </>
     );
}
 
export default Nav;