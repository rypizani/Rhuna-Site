import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/mundo.mp4'
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

                <HeroH1>Eficiência, Organização E Colaboração </HeroH1>
                <HeroP> 
                Lorem ipsum dolor sit amet. Quo cupiditate veniam quo voluptatum alias sit tempore sequi eos rerum consequuntur est totam quisquam ab ullam sunt aut velit cumque.
                </HeroP>
                <HeroBtnWrapper>
                   
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero