import SectionTitle from "../common/SectionTitle";
import sectionImage from "../../assets/images/section_image.png"

export default function WaitlistSection() {
    return (
        <section className="pt-20 mb-10">
            <div className="container mx-auto px-5 flex flex-col justify-center items-center">
                <SectionTitle
                    title="Join the chow africa waitlist"
                    color="black"
                />

                <h3 className="text-6xl pangram mt-7">
                    tired of eating the same
                </h3>
                <span className="sofia-sans text-4xl w-fit block bg-primary py-2 rounded-full text-white drop-shadow-xl border-[3px] border-black px-7 mb-8">
                    🍛same dishes everyday?🍝
                </span>
                <p className="text-lg sofia-sans w-[40%] mx-auto text-center mb-9">
                    Do you crave new and exciting dishes? Look no further! Chow
                    is the perfect solution for discovering your next dish.
                </p>

                <img src={sectionImage} alt="User odering food via chow africa app" />
            </div>
        </section>
    );
}