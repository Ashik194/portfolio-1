import React from 'react'
import Typed from 'react-typed'

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h2>Web Development Practice....................</h2>
                <Typed
                    className="type-text"
                    strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;