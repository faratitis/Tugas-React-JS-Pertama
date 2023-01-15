import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return ( <
        div >
        <
        Navbar className = "Navigation" >
        <
        Container >
        <
        Nav.Link > Home < /Nav.Link>  <
        Nav.Link > Live < /Nav.Link>  <
        Nav.Link > Video < /Nav.Link>  <
        Nav.Link > Program < /Nav.Link>  <
        Nav.Link > Schedule < /Nav.Link>  <
        Nav.Link > Career < /Nav.Link>  <
        Nav.Link > Corporate < /Nav.Link>  <
        Nav.Link > Contact Us < /Nav.Link>  <
        Nav.Link > Sign In < /Nav.Link>  < /
        Container > <
        /Navbar> < /
        div >
    )
}

export default NavigationBar