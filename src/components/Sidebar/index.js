import React from 'react'
import {
    CloseIcon,
    Icon,
    SidebarBtnWrap,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-10}
                        to="about"
                        onClick={toggle}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-10}
                        to="discover"
                        onClick={toggle}
                    >
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-10}
                        to="services"
                        onClick={toggle}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-10}
                        to="signup"
                        onClick={toggle}
                    >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
