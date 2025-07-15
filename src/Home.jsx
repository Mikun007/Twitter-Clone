import React, { useState, useRef, useEffect } from 'react';

const Home = () => {
    const [text, setText] = useState('');

    return ( 
        <>
        <div id="home">
            <div className="firstElementHome">
                <div className="forYou"> <p>For You</p></div>
                <div className="following"> <p>Following</p></div>
            </div>

            <div className="inputHome">
                <div className="imageInput"><img src="" alt="none" /></div>
                <div className="inputFiled">
                    <div>
                         <textarea
                            rows={1}
                            placeholder="What's happening?"
                            className="tweet-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            maxLength={280}
                        />
                        <div>Everyone can replay</div>
                    </div>
                    <hr />
                    <div className='underZoneOfTextarea'>
                        <div className='attachmentArea'>
                            <span>p</span>
                            <span>p</span>
                            <span>p</span>
                            <span>p</span>
                            <span>p</span>
                            <span>p</span>
                            <span>p</span>
                        </div>
                        <div className='buttonArea'>
                            <button>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
        </>
     );
}
 
export default Home;