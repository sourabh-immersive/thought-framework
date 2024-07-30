import Link from "next/link";
import Container from "./common/container";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent navbar-custom">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <Image src="/thought-framework-logo.webp" width={200} height={45} alt="Thought Frameworks" priority />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink2"
                  >
                    <li>
                      <Link className="dropdown-item" href="/">
                      Thought Quality
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                      Thought Design
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                      Thought Code
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                      Thought Ops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                      Thought Digital
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Get Onboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Insights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;