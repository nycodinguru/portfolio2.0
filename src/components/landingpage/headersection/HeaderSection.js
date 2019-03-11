import React from 'react';
import Typed from 'react-typed';
import { Parallax } from 'react-scroll-parallax';
import Scrollchor from 'react-scrollchor';


const HeaderSection = props => {

    return (
        <div className="Header-section-parent">
            <div>
                <div className="Header-section">
                    <Scrollchor to="Portfolio" animate={{offset: 0, duration: 450}}>
                        <h1 className="Typed-header">
                            <Typed 
                                strings={[
                                    "hello, world. 👋",
                                    "hello, world. 👋",
                                    "hello, world. 👋",
                                    "click here, or...",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    "scroll down ⬇",
                                    ]}
                                    typeSpeed={60}
                                    backSpeed={25}
                                    startDelay={1700}
                                    backDelay={1200}
                                    showCursor={false}
                                    loop
                                    >
                            </Typed>
                        </h1>
                    </Scrollchor>
                </div>
            </div>
            <Parallax
            className="Parallax-parent-header-upper"
            offsetYMax={9000}
            offsetYMin={-150}
            slowerScrollRate
            tag="figure"
            >
                <h3 className="Header-header-upper"> portfolio. </h3> 
            </Parallax>
        </div>
    )

}

export default HeaderSection;