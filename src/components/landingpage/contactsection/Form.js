import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Animation from '../../animations/Animation';

const Form = props => {
    return (
        <div id="Contact" className="Contact-form-container">
            <div className="Contact-form">
            <Parallax
                    className="Parallax-parent-upper"
                    offsetYMax={140}
                    offsetYMin={-550}
                    slowerScrollRate
                    tag="figure"
                    >
                    <h2>contact.</h2>
                </Parallax>
            
            <div className="Checkmark-container">
                <svg className="Checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="Checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="Checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                <h3 className="Checkmark-message"></h3>
                </div>
                <form id="Contact-form" className="Form">
                    <div className="Name-fields">
                        <Animation
                        animationClass="Slide-right-animation"
                        >
                            <input className="First-name" name="firstName" type="text" placeholder="First Name" onChange={props.handleChange}></input>
                        </Animation>
                        <Animation
                        animationClass="Slide-left-animation"
                        >
                            <input className="Last-name" name="lastName" type="text" placeholder="Last Name" onChange={props.handleChange}></input>
                        </Animation>
                    </div>
                <div className="Other-fields">
                        <Animation
                        animationClass="Slide-up-animation"
                        bO="20%"
                        >
                        <input className="Email" name="email" type="email" placeholder="Email" onChange={props.handleChange}></input>
                        </Animation>
                        <div id="Email"></div>
                        <Animation
                        animationClass="Slide-up-animation"
                        bO="25%"
                        >
                        <textarea id="Message" name="message" placeholder="Type your message here..." onChange={props.handleChange}></textarea>
                        </Animation>
                        <Animation
                        animationClass="Fade-in-animation"
                        >
                        <div className="Count">
                            <span id="Count">{props.count}</span>/{props.charLimit}
                        </div>
                        </Animation>
                </div>       
                    <Animation
                    animationSubClass="Button-parent"
                    animationClass="Slide-up-animation"
                    bO="14%"
                    >
                        <button className="Button" type="submit" value="Send" onClick={ (e) => props.handleSubmit(e)}>send</button>
                    </Animation>
                </form>
            </div> 
        </div>
        
    )
    
}

export default Form;