import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="MainNav"
        bg="light"
      >
        <Container>
          <img src="src\assets\Header\logo.png" className="logo" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="sub_nav">
            <Nav className="mx-auto">
              <Navbar.Brand href="#Home" className="navLinks links">
                Home
              </Navbar.Brand>
              <Nav.Link href="#shop" className="navLinks links">
                Shop
              </Nav.Link>

              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                className="navLinks links"
              >
                <NavDropdown.Item href="#action/Womens">Womens</NavDropdown.Item>
                <NavDropdown.Item href="#action/Mens">Mens</NavDropdown.Item>
                <NavDropdown.Item href="#action/Children">Children</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/Others">Others</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Contact" className="navLinks links">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="mx-auto">
              <Nav.Link href="#Search" className="navLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </Nav.Link>
              <Nav.Link href="#Likes" className="navLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_8360_21465)">
                    <path
                      d="M8.03703 1.87441C8.14119 1.79629 8.25513 1.7377 8.37882 1.69863C8.50252 1.65957 8.62947 1.64004 8.75968 1.64004C8.88989 1.64004 9.01684 1.65957 9.14054 1.69863C9.26424 1.7377 9.37817 1.79629 9.48234 1.87441C9.59953 1.93952 9.69718 2.02415 9.77531 2.12832C9.85343 2.23249 9.91203 2.34316 9.95109 2.46035L11.6698 6.77676C11.6698 6.78978 11.6698 6.79629 11.6698 6.79629C11.6698 6.79629 11.6698 6.79954 11.6698 6.80606C11.6698 6.81257 11.6763 6.81582 11.6894 6.81582L16.2987 7.10879C16.8977 7.14785 17.2818 7.45059 17.4511 8.01699C17.6204 8.5834 17.4836 9.04889 17.0409 9.41348L13.5058 12.3627C13.5058 12.3627 13.5025 12.366 13.496 12.3725C13.4895 12.379 13.4862 12.3822 13.4862 12.3822C13.4862 12.3822 13.4862 12.3855 13.4862 12.392C13.4862 12.3985 13.4862 12.4018 13.4862 12.4018L14.6386 16.8939C14.7688 17.4408 14.606 17.8966 14.1503 18.2611C13.6946 18.6257 13.2128 18.6452 12.705 18.3197L8.75968 15.8197L5.08781 18.1439C4.52791 18.4955 3.99731 18.4695 3.49601 18.0658C2.99471 17.6622 2.82218 17.1609 2.97843 16.5619L4.03312 12.4018C4.03312 12.4018 4.03312 12.3985 4.03312 12.392C4.03312 12.3855 4.03312 12.3822 4.03312 12.3822C4.03312 12.3822 4.02986 12.379 4.02335 12.3725C4.01684 12.366 4.01359 12.3627 4.01359 12.3627L0.478433 9.41348C0.0357242 9.04889 -0.100995 8.5834 0.0682763 8.01699C0.237547 7.45059 0.621662 7.14785 1.22062 7.10879L5.82999 6.81582C5.84302 6.81582 5.84953 6.81257 5.84953 6.80606C5.84953 6.79954 5.84953 6.79629 5.84953 6.79629C5.84953 6.79629 5.84953 6.78978 5.84953 6.77676L7.56828 2.46035C7.60734 2.34316 7.66593 2.23249 7.74406 2.12832C7.82218 2.02415 7.91984 1.93952 8.03703 1.87441ZM9.44328 14.765L13.3691 17.265C13.3821 17.265 13.3886 17.265 13.3886 17.265C13.3886 17.265 13.3951 17.265 13.4081 17.265C13.4081 17.252 13.4114 17.2455 13.4179 17.2455C13.4244 17.2455 13.4277 17.239 13.4277 17.226C13.4277 17.226 13.4277 17.2227 13.4277 17.2162C13.4277 17.2097 13.4277 17.2064 13.4277 17.2064L12.2753 12.7143C12.2493 12.5971 12.2395 12.4766 12.246 12.3529C12.2525 12.2292 12.2753 12.1088 12.3144 11.9916C12.3404 11.8744 12.3892 11.7637 12.4609 11.6596C12.5325 11.5554 12.6138 11.4643 12.705 11.3861L16.2402 8.45645C16.2402 8.44343 16.2434 8.43691 16.2499 8.43691C16.2564 8.43691 16.2597 8.43691 16.2597 8.43691C16.2597 8.43691 16.2597 8.4304 16.2597 8.41738C16.2597 8.41738 16.2597 8.41413 16.2597 8.40762C16.2597 8.40111 16.2597 8.39134 16.2597 8.37832C16.2597 8.37832 16.2564 8.37507 16.2499 8.36856C16.2434 8.36204 16.2402 8.35879 16.2402 8.35879C16.2402 8.35879 16.2336 8.35879 16.2206 8.35879L11.6308 8.06582C11.6308 8.06582 11.6275 8.06582 11.621 8.06582C11.6145 8.06582 11.6112 8.06582 11.6112 8.06582C11.4941 8.0528 11.3769 8.02676 11.2597 7.9877C11.1425 7.94863 11.0383 7.89004 10.9472 7.81191C10.843 7.73379 10.7551 7.64915 10.6835 7.55801C10.6119 7.46686 10.55 7.3627 10.498 7.24551L8.77921 2.90957C8.77921 2.89655 8.77921 2.89004 8.77921 2.89004C8.77921 2.89004 8.77596 2.89004 8.76945 2.89004C8.76294 2.89004 8.75968 2.89004 8.75968 2.89004C8.75968 2.89004 8.75643 2.89004 8.74992 2.89004C8.74341 2.89004 8.74015 2.89004 8.74015 2.89004C8.74015 2.89004 8.74015 2.89655 8.74015 2.90957L7.0214 7.24551C6.96932 7.3627 6.90747 7.46686 6.83585 7.55801C6.76424 7.64915 6.67635 7.73379 6.57218 7.81191C6.48104 7.89004 6.37687 7.94863 6.25968 7.9877C6.14249 8.02676 6.02531 8.0528 5.90812 8.06582L1.29874 8.35879C1.28572 8.35879 1.27921 8.35879 1.27921 8.35879C1.27921 8.35879 1.27596 8.36204 1.26945 8.36856C1.26294 8.37507 1.25968 8.37832 1.25968 8.37832C1.25968 8.39134 1.25968 8.40111 1.25968 8.40762C1.25968 8.41413 1.25968 8.41738 1.25968 8.41738C1.25968 8.4304 1.25968 8.43691 1.25968 8.43691C1.25968 8.43691 1.26294 8.43691 1.26945 8.43691C1.27596 8.43691 1.27921 8.44343 1.27921 8.45645L4.81437 11.3861C4.90552 11.4643 4.9869 11.5554 5.05851 11.6596C5.13013 11.7637 5.17895 11.8744 5.20499 11.9916C5.24406 12.1088 5.26684 12.2292 5.27335 12.3529C5.27986 12.4766 5.2701 12.5971 5.24406 12.7143L4.18937 16.8744C4.17635 16.9135 4.17635 16.9525 4.18937 16.9916C4.20239 17.0307 4.22192 17.0567 4.24796 17.0697C4.26098 17.0827 4.27401 17.0925 4.28703 17.099C4.30005 17.1055 4.31307 17.1088 4.32609 17.1088C4.33911 17.1088 4.35213 17.1088 4.36515 17.1088C4.37817 17.1088 4.3977 17.1023 4.42375 17.0893L8.07609 14.765C8.18025 14.6999 8.29093 14.6511 8.40812 14.6186C8.52531 14.586 8.6425 14.5697 8.75968 14.5697C8.87687 14.5697 8.99406 14.586 9.11125 14.6186C9.22843 14.6511 9.33911 14.6999 9.44328 14.765Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8360_21465">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 20.3901)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Nav.Link>
              <Nav.Link href="#Cart" className="navLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M2.37305 5.39014H14.9902C15.1465 5.39014 15.2962 5.41618 15.4395 5.46826C15.5827 5.52034 15.7129 5.59847 15.8301 5.70264C15.9473 5.8068 16.0417 5.92725 16.1133 6.06396C16.1849 6.20068 16.2272 6.34066 16.2402 6.48389C16.2402 6.49691 16.2402 6.50342 16.2402 6.50342L17.3535 16.5034C17.3665 16.5946 17.3665 16.6825 17.3535 16.7671C17.3405 16.8517 17.321 16.9331 17.2949 17.0112C17.2689 17.1024 17.2363 17.1838 17.1973 17.2554C17.1582 17.327 17.1061 17.3953 17.041 17.4604C16.9889 17.5386 16.9271 17.6037 16.8555 17.6558C16.7839 17.7078 16.709 17.7469 16.6309 17.7729C16.5397 17.812 16.4518 17.8413 16.3672 17.8608C16.2826 17.8804 16.2012 17.8901 16.123 17.8901H1.24023C1.16211 17.8901 1.08073 17.8804 0.996094 17.8608C0.911458 17.8413 0.823568 17.812 0.732422 17.7729C0.654297 17.7469 0.579427 17.7078 0.507812 17.6558C0.436198 17.6037 0.374349 17.5386 0.322266 17.4604C0.257161 17.3953 0.205078 17.327 0.166016 17.2554C0.126953 17.1838 0.094401 17.1024 0.0683594 17.0112C0.0423177 16.9331 0.0227865 16.8517 0.00976562 16.7671C-0.00325521 16.6825 -0.00325521 16.5946 0.00976562 16.5034L1.12305 6.50342C1.12305 6.50342 1.12305 6.49691 1.12305 6.48389C1.13607 6.34066 1.17839 6.20068 1.25 6.06396C1.32161 5.92725 1.41602 5.8068 1.5332 5.70264C1.65039 5.59847 1.7806 5.52034 1.92383 5.46826C2.06706 5.41618 2.2168 5.39014 2.37305 5.39014ZM14.9902 6.64014H2.37305L1.25977 16.6401H16.1035L14.9902 6.64014ZM8.68164 3.51514C8.35612 3.51514 8.03711 3.57699 7.72461 3.70068C7.41211 3.82438 7.13867 4.00342 6.9043 4.23779C6.66992 4.47217 6.49089 4.74561 6.36719 5.05811C6.24349 5.37061 6.18164 5.68962 6.18164 6.01514V8.51514C6.18164 8.68441 6.11979 8.83089 5.99609 8.95459C5.8724 9.07829 5.72591 9.14014 5.55664 9.14014C5.38737 9.14014 5.24089 9.07829 5.11719 8.95459C4.99349 8.83089 4.93164 8.68441 4.93164 8.51514V6.01514C4.93164 5.52034 5.02604 5.04183 5.21484 4.57959C5.40365 4.11735 5.67383 3.71045 6.02539 3.35889C6.37695 3.00732 6.78385 2.73714 7.24609 2.54834C7.70833 2.35954 8.18685 2.26514 8.68164 2.26514C9.17643 2.26514 9.65495 2.35954 10.1172 2.54834C10.5794 2.73714 10.9863 3.00732 11.3379 3.35889C11.6895 3.71045 11.9596 4.11735 12.1484 4.57959C12.3372 5.04183 12.4316 5.52034 12.4316 6.01514V8.51514C12.4316 8.68441 12.3698 8.83089 12.2461 8.95459C12.1224 9.07829 11.9759 9.14014 11.8066 9.14014C11.6374 9.14014 11.4909 9.07829 11.3672 8.95459C11.2435 8.83089 11.1816 8.68441 11.1816 8.51514V6.01514C11.1816 5.68962 11.1198 5.37061 10.9961 5.05811C10.8724 4.74561 10.6934 4.47217 10.459 4.23779C10.2246 4.00342 9.95117 3.82438 9.63867 3.70068C9.32617 3.57699 9.00716 3.51514 8.68164 3.51514Z"
                    fill="black"
                  />
                </svg>
              </Nav.Link>
            </Nav>

            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/Sign-In" className="navLinks">
                  Sign In
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-2" className="navLinks" href="/Sign-Up"  >
                  Sign Up
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
