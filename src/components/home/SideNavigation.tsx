import { Link, NavLink } from "react-router-dom"


export default function SideNavigation() {
    return (
        <aside className="w-[22%] hidden lg:block px-8 sofia-sans">
            <img src="/svgs/Logo 3.svg" alt="Chow Africa Logo" />

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
                        <Link to="/#" className="pl-5">
                            Join waitlist
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-4 items-center">
                <a href="/">
                    <img src="/svgs/facebook.svg" alt="Facebook" />
                </a>
                <a href="/">
                    <img src="/svgs/twitter.svg" alt="Twitter" />
                </a>
                <a href="/">
                    <img src="/svgs/instagram.svg" alt="Instagram" />
                </a>
            </div>
        </aside>
    );
}