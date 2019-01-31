import React from 'react';
import { Parallax } from 'react-scroll-parallax';


const AboutSection = props => {
    return(
        <div className="About-parent">
            <Parallax
                className="Parallax-parent-upper"
                offsetYMax={1300}
                offsetYMin={-500}
                slowerScrollRate
                tag="figure"
                >
                <h3 className="Typed-about-header Upper"> about. </h3>
            </Parallax>
            <Parallax
            className="Parallax-parent-lower"
            offsetYMax={200}
            offsetYMin={-630}
            slowerScrollRate
            tag="figure"
            >
            <h3 className="Typed-about-header Lower"> about. </h3>
        </Parallax>
            <div className="About-sub-parent collapse-row-column">
                <div>
                    <div className="Headshot"></div>
                    <div className="Button-parent">
                        <a href="https://resume.creddle.io/resume/awq9dml69ev" target="_blank" rel="noopener noreferrer"><div className="Button">resume</div></a>
                        <a href="https://www.linkedin.com/in/rashad-rose/" target="_blank" rel="noopener noreferrer"><div className="Button">linkedin</div></a>
                    </div>
                </div>
                <p className="About-blurb">I am a web developer with a background in management and IT. I’m personable, self-motivated and I work well on a team. My time working as a field tech, traveling around the US and the globe, as well as my life-long personal interest in tinkering with tech, have given me a good grasp on people, history, culture, and of bunch of tech-oriented subject matter. I’m an empathetic person with a natural tendency to help others, and I also have a good sense of humor 😄.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;