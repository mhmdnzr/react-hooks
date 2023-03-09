import { useId } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { rootsList } from "../../routes/Roots";


function NavbarComponent() {
    const id = useId();
 
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React Hook</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            {rootsList.map((data, index) => {
                                if (index > 1) {
                                    return (
                                        <NavDropdown.Item
                                            eventKey={`link-${index}`}
                                            key={id + index}
                                            href={data.path}
                                        >
                                            {data.name}
                                        </NavDropdown.Item>
                                    );
                                }
                            })}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavbarComponent;
