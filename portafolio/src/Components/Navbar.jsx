import React, {useState} from 'react'
import { Container, MenuItem, Wrapper, Menu, MenuItemLink, MobileIcon, } from './NavbarElement'
import { Icon } from '../Styles/Icons'

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Icon className="fas fa-bars" />
                </MobileIcon>
                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-home" />
                            Home
                            </MenuItemLink>   
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-user" />
                            Sobre
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-th-list" />
                            Portafolio
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-file-signature" />
                            Blog
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-address-card" />
                            Contacto
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar
