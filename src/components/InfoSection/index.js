import React from 'react'
import { Button } from '../ButtonElement'
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
} from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle lightText={lightText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="home"
                                        primary={primary}
                                        dark={dark}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        // offset={-80}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
