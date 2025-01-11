import { NavLink, Link } from "react-router-dom";

function Navbar() {
    const navLinks = [
        {
            path: "/",
            title: "Home",
        },

        {
            path: "/list-blogs",
            title: "List",
        },

        {
            path: "/about",
            title: "AboutUs",
        }

    ];

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Daniele
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((curLink) => (
                            <li className="nav-item" key={curLink.title}>
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to={curLink.path}
                                >
                                    {curLink.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
