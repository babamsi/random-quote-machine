import React from 'react';
import linkel from '../../assets/Images/iconfinder_LinkedIn-social-media-logo_2220673.svg'
import Git from '../../assets/Images/iconfinder_github-social-media-logo_2220681.svg'
import Google from '../../assets/Images/iconfinder_google-plus-social-media-logo_2220676.svg'
import './icons.css'

const icons = (props) => (
    <div className='Icon animated bounceInDown delay-1s'>
        <a href="https://www.linkedin.com/in/suhayb-cabdulahi-developer"> <img src={linkel} alt="my-linkeldn" style={{cursor: 'pointer'}}/></a>
        <a href="https://github.com/suhaybcabdulahi/"> <img src={Git} alt="my-github" style={{cursor: 'pointer'}}/></a>
        <a href="https://plus.google.com/u/0/103626301082222899855"> <img src={Google} alt="google" style={{cursor: 'pointer'}}/></a>
    </div>
)

export default icons;