import MobileNav from "../components/common/mobileNav";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import SideNavigation from "../components/home/SideNavigation";
import WaitlistSection from "../components/home/WaitlistSection";

export default function Home() {
    return (
        <div>
            <MobileNav />
            <div className="flex px-5 pt-12 container mx-auto">
                <SideNavigation />
                {/* Main header */}
                <Header />
            </div>
            <WaitlistSection />
            <Footer />
        </div>
    );
}