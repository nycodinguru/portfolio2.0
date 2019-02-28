import React, { Component } from 'react';
import pdf from '../../assets/pdf/rashads_resume.pdf';


export default class Resume extends Component {

    render() {
        return (
            <div class="resume">
                 <embed src={pdf} type="application/pdf" width="100%" height="1400px" />
            </div>
        );
    }

}