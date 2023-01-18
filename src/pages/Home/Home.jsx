import React from 'react'

import Slider from './Slider/Slider'
import icons from './icons'

import logo from '../../assets/img/ava.jpg'

import s from './Home.module.scss'

const Home = () => {
    return (
        <div className={s.info}>
            <Slider />
            <div className={s.profileImage}>
                <img className={s.ava} src={logo} alt="ava"/>
                <div>
                    <div className={s.circleInner}>
                        {
                            icons.map(({src, alt}, id) =>(
                                <img key={id} className={s.logo} src={src} alt={alt}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home