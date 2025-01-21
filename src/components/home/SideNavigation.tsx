import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/svgs/Logo 3.svg"
import fb from "../../assets/svgs/facebook.svg"
import x from "../../assets/svgs/twitter.svg"
import ig from "../../assets/svgs/instagram.svg"

export default function SideNavigation() {
    return (
        <aside className="w-[22%] hidden lg:block px-8 sofia-sans">
            <img src={logo} alt="Chow Africa Logo" />

            <nav className="mt-10 mb-5">
                <ul className="flex flex-col gap-3">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-link" : "pl-4"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/#"
                            className="pl-5"
                        >
                            Join waitlist
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-4 items-center">
                <a href="/">
                    <img src={fb} alt="Facebook" />
                </a>
                <a href="/">
                    <img src={x} alt="Twitter" />
                </a>
                <a href="/">
                    <img src={ig} alt="Instagram" />
                </a>
            </div>
        </aside>
    );
}