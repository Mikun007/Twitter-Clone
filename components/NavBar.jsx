import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
            <nav>
                <div>
                    <Link to="/">Profile Logout</Link>
                </div>
                <div className="upperNav" style={{display: "flex", flexDirection: "column", overflowY: "scroll"}}>
                    <Link to="/"><span><p className="textNav">Home</p></span></Link>
                    <Link to="/"><span><p className="textNav">Explore</p></span></Link>
                    <Link to="/"><span><p className="textNav">Notification</p></span></Link>
                    <Link to="/"><span><p className="textNav">Messages</p></span></Link>
                    <Link to="/"><span><p className="textNav">Grok</p></span></Link>
                    <Link to="/"><span><p className="textNav">Communities</p></span></Link>
                    <Link to="/"><span><p className="textNav">Premium</p></span></Link>
                    <Link to="/Profile"><span><p className="textNav">Profile</p></span></Link>
                    <Link to="/"><span><p className="textNav">More</p></span></Link>
                </div>

                <button>Post</button>
                <div className="logout">
                    <Link to="/">Profile Logout</Link>
                </div>

            </nav>
        </>
     );
}
 
export default Nav;