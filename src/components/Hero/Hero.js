import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/file.mp4'
import img from '../../images/Logo Original 2.png'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Img
} from './StyledHero'

import { Button } from '../ButtonElement'

const Hero = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>

            <Img src={img}/>

                <HeroH1>HIGH PRODUCTIVITY PLANT NUTRITION</HeroH1>
                <HeroP> 
                </HeroP>
                <HeroBtnWrapper>
                   
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero