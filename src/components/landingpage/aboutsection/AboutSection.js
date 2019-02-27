import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Animation from '../../animations/Animation';


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
                offsetYMin={-720}
                slowerScrollRate
                tag="figure"
                >
                <h3 className="Typed-about-header Lower"> {props.info.title} </h3>
            </Parallax>
                <div className="About-sub-parent collapse-row-column">
                    <div>
                        <Animation
                        animationClass="Headshot-animation"
                        >
                            <div className="Headshot"></div>
                        </Animation>
                        <div className="Button-parent">
                        <Animation
                        animationClass="Button-animation"
                        >
                            <a href={`${props.info.resumeLink}`} target="_blank" rel="noopener noreferrer"><div className="Button">resume</div></a>
                        </Animation>
                        <Animation
                        animationClass="Button-animation"
                        bO="14%"
                        >
                            <a href={`${props.info.linkedinLink}`} target="_blank" rel="noopener noreferrer"><div className="Button">linkedin</div></a>
                        </Animation>
                        </div>
                    </div>
                    <Animation
                    animationClass="About-blurb-animation"
                    animationSubClass="About-blurb-width"
                    >
                        <p className="About-blurb">{props.info.blurb}</p>
                    </Animation>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;