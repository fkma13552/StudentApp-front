import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

function NavigationBar() {
    return(
        <Navbar expand={"lg"}>
            <Container>
                <Navbar.Brand>student app</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/students">
                            <Nav.Link>
                                All students <br/>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/studentCreate">
                            <Nav.Link>
                                Create student <br/>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/courseCreate">
                            <Nav.Link>
                                Create course
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavigationBar