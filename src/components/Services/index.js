import React from 'react'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './ServicesElements'

const icon = {
    one: require('../../images/undraw_make_it_rain_iwk4.svg').default,
    two: require('../../images/undraw_savings_re_eq4w.svg').default,
    three: require('../../images/undraw_treasure_of-9-i.svg').default,
}

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon.one} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>
                            We help reduce your fess and increase your overall
                            revenue.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon.two} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>
                            You can access our platform online anywhere in the
                            world
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon.three} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>
                            Unlock our special membership card that returns 5%
                            cash back.
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
