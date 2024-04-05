import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const abc = ({setCategory}) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-4'><Badge>MagNews</Badge></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setCategory("technology")}>Technology</Nav.Link>
            <Nav.Link onClick={()=>setCategory("business")}>Business</Nav.Link>
            <Nav.Link onClick={()=>setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={()=>setCategory("sports")}>Sports</Nav.Link>
            <Nav.Link onClick={()=>setCategory("science")}>Science</Nav.Link>
            <Nav.Link onClick={()=>setCategory("entertainment")}>Entertainment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}
export default abc