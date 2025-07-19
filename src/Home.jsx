import React, { useState } from 'react';
import { FaRegImage, FaRocketchat } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
    const [text, setText] = useState('');
    const [active, setActive] = useState(false);
    

    return ( 
        <>
        <div id="home">
            <div className="firstElementHome text">
                <div className="forYou"> <span>For You</span></div>
                <div className="following"> <span>Following</span></div>
            </div>

            <div className="inputHome">
                <div className="imageInput"><img src="/profile.svg" alt="none" style={{width: "45px", borderRadius: "50%", marginTop: "10%"}}/></div>
                <div className="inputFiled">
                    <div>
                         <textarea
                            className="tweet-input text"
                            rows={1}
                            placeholder="What's happening?"
                            value={text}
                            onClick={() => {setActive(true)}}
                            onChange={(e) => setText(e.target.value)}
                            maxLength={280}
                        />
                        <div className={active ? "" : 'disabledEnabled'}><span className='whoCanReplaybtn'>Everyone can replay</span></div>
                    </div>
                    <hr className={active ? "" : 'disabledEnabled'}/>
                    <div className='underZoneOfTextarea'>
                        <div className='attachmentArea'>
                            <span><FaRegImage size={23}/></span>
                            <span><MdOutlineGifBox size={23} /></span>
                            <span><FaRocketchat size={23}/></span>
                            <span><BiPoll size={23}/></span>
                            <span><BsEmojiSmile size={23} /></span>
                            <span><RiCalendarScheduleLine size={23} /></span>
                            <span><CiLocationOn size={23} /></span>
                        </div>
                        <div className='buttonArea'>
                            <button disabled={text.length>0 ? "": "disabled"}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div></div>
            </div>
            

        </div>
        </>
    );
}
 
export default Home;