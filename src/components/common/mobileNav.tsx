import MobileCtaButton from "./mobileCtaButton";

export default function MobileNav() {
    return (
        <div className="lg:hidden">
            <div className="container px-5 mx-auto flex items-center py-3">
                <img src="/svgs/Logo 3.svg" alt="Chow Africa Logo" />

                <div className="ml-auto flex items-center gap-2">
                    <MobileCtaButton text="Join waitlist" />

                    <button>
                        <img src="/svgs/hamburger.svg" alt="Hamburger menu" />
                    </button>
                </div>
            </div>
        </div>
    );
}
