import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavBtn,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const scrollToTop = () => {
        animateScroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={scrollToTop}>
                            dolla
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // offset={-80}
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // offset={-80}
                                >
                                    Discover
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // offset={-80}
                                >
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // offset={-80}
                                >
                                    Sign Up
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sing In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
