import React from 'react'
import { Container, MenuItem, Wrapper, Menu, MenuItemLink, } from './NavbarElement'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                        Home
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        Sobre
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        Potafolio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        Contacto
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar
