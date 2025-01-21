import SectionTitle from "../common/SectionTitle";

export default function WaitlistSection() {
    return (
        <section
            className="pt-20 mb-10"
            style={{
                backgroundImage: "url('/svgs/section_bg.svg')",
                backgroundSize: "contain",
                backgroundPosition: "center 20%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-5 flex flex-col justify-center items-center">
                <SectionTitle
                    title="Join the chow africa waitlist"
                    color="black"
                />

                <h3 className="text-6xl hidden lg:block pangram mt-7">
                    tired of eating the same
                </h3>
                <h3 className="text-3xl lg:hidden pangram mt-7 w-[80%] text-center text-[#353542] ">
                    Are you tired of eating the same dishes{" "}
                    <span className="inline-block p-1 bg-primary text-white text-lg border-2 font-light border-black rounded-full sofia-sans">
                        everyday ?
                    </span>
                </h3>
                <span className="sofia-sans hidden lg:block text-4xl w-fit bg-primary py-2 rounded-full text-white drop-shadow-xl border-[3px] border-black px-7 mb-8">
                    🍛same dishes everyday?🍝
                </span>
                <p className="text-lg sofia-sans w-[85%] lg:w-[40%] mx-auto text-center mb-9">
                    Do you crave new and exciting dishes? Look no further! Chow
                    is the perfect solution for discovering your next dish.
                </p>

                <img
                    src="/images/section_image.png"
                    className="hidden lg:block"
                    alt="User odering food via chow africa app"
                />
                <img
                    src="/images/mobile_waitlist.png"
                    className="lg:hidden"
                    alt="User odering food via chow africa app"
                />
            </div>
        </section>
    );
}