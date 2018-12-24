import React from 'react';
import linkel from '../../assets/Images/iconfinder_LinkedIn-social-media-logo_2220673.svg'
import Git from '../../assets/Images/iconfinder_github-social-media-logo_2220681.svg'
import Google from '../../assets/Images/iconfinder_google-plus-social-media-logo_2220676.svg'
import './icons.css'

const icons = (props) => (
    <div className='Icon animated bounceInDown delay-1s'>
        <img src={linkel}/>
        <img src={Git}/>
        <img src={Google}/>
    </div>
)

export default icons;