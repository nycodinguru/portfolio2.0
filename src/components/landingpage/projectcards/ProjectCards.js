import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import CardAnimation from '../../animations/CardAnimation';
//

const ProjectCards = props => {

    const cards = props.data.map( (item, key) => {
        return(
            <div key={key+9}>
                <CardAnimation
                    animationClass="Slide-and-fade-in"
                    animationSubClass={item.animationSubClass}
                >
            
                    <div key={key} className="Card" id={item.id}>
                        <div className="Project-logo" style={{
                            background: `url('${item.screenshot}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            }} key={key+1}>  
                        </div>
                        <h3 className="Project-title" key={key+2}>{item.title}</h3>
                        <div className="Tech-stack-parent" key={key+3}>
                            <h4 key={key+4}>tech stack</h4>
                            {item.techStack.map( (itemClassName, key) => {
                                return(
                                    <div className={` ${itemClassName} Tech-stack-logo`} key={key+1}> </div>
                                )
                            })}
                            </div>         
                        <p key={key+5}>{item.description}</p>
                        <div className="Buttons-parent" key={key+6}>
                            <a href={`${item.githubLink}`} target="_blank" rel="noopener noreferrer" className="Button" key={key+7}>github</a> 
                            <a href={`${item.deploymentLink}`} target="_blank" rel="noopener noreferrer" className="Button" key={key+8}>launch</a>
                        </div>   
                    </div>
                </CardAnimation>
            </div>
        )
    });

    return(
        <div className="Project-section-parent">
            <Parallax
            className="Parallax-parent-header-lower"
            offsetYMax={420}
            offsetYMin={-100}
            slowerScrollRate
            tag="figure"
            >
                <h3 className="Typed-projects-header Lower"> portfolio. </h3> 
            </Parallax>
            <div className="Project-section-container collapse-row-column " id="Portfolio">
                <div className="Project-cards-parent"> {cards} </div>
            </div>
        </div>
    )
 
};

export default ProjectCards;
