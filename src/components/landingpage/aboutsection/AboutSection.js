import React from 'react';
import { Parallax } from 'react-scroll-parallax';


const AboutSection = props => {
    return(
        <div className="About-container">
            <div className="About-parent">
                <Parallax
                    className="Parallax-parent-upper"
                    offsetYMax={1300}
                    offsetYMin={-500}
                    slowerScrollRate
                    tag="figure"
                    >
                    <h3 className="Typed-about-header Upper"> {props.info.title} </h3>
                </Parallax>
                <Parallax
                className="Parallax-parent-lower"
                offsetYMax={200}
                offsetYMin={-630}
                slowerScrollRate
                tag="figure"
                >
                <h3 className="Typed-about-header Lower"> {props.info.title} </h3>
            </Parallax>
                <div className="About-sub-parent collapse-row-column">
                    <div>
                        <div className="Headshot"></div>
                        <div className="Button-parent">
                            <a href={`${props.info.resumeLink}`} target="_blank" rel="noopener noreferrer"><div className="Button">resume</div></a>
                            <a href={`${props.info.linkedinLink}`} target="_blank" rel="noopener noreferrer"><div className="Button">linkedin</div></a>
                        </div>
                    </div>
                    <p className="About-blurb">{props.info.blurb}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;