import logo from "../../assets/svgs/Logo 3.svg";
import hamburger from "../../assets/svgs/hamburger.svg";
import MobileCtaButton from "./mobileCtaButton";

export default function MobileNav() {
    return (
        <div className="lg:hidden">
            <div className="container px-5 mx-auto flex items-center py-3">
                <img src={logo} alt="Chow Africa Logo" />

                <div className="ml-auto flex items-center gap-2">
                    <MobileCtaButton text="Join waitlist" />

                    <button>
                        <img src={hamburger} alt="Hamburger menu" />
                    </button>
                </div>
            </div>
        </div>
    );
}
