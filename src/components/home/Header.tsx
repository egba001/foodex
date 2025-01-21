import CtaButton from "../common/CtaButton";
import SectionTitle from "../common/SectionTitle";
import { useEffect, useState } from 'react';
import ImageCarousel from "./ImageCarousel";

export default function Header() {
    const listOfDynamicTexts = [
        "Now! Now!",
        "as e dey hot",
        "kia kia",
        "Asap!",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render

    // This side effect dynamically changes the text on the header
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTextIndex(
                (prevIndex) => (prevIndex + 1) % listOfDynamicTexts.length
                
            );
            setAnimationKey((prevKey) => prevKey + 1);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header
            className="w-full rounded-2xl bg-dark pt-20 text-white overflow-hidden"
            style={{
                backgroundImage:
                    "url('/images/header_background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="mx-auto w-fit flex my-10 flex-col items-center  gap-2">
                <SectionTitle
                    title="Join the chow africa waitlist"
                    color="white"
                />

                <h1 className="text-4xl flex-wrap px-2 lg:px-0 text-center justify-center lg:text-6xl mb-5 mx-auto transition-transform duration-300 ease-in-out inline-flex items-center">
                    <span className="font-pangram ">Find chow,</span>

                    <span
                        key={animationKey}
                        className="courgette-regular text-green gap-1 animate-slide-in"
                    >
                        {listOfDynamicTexts[currentTextIndex]}
                        <svg
                            aria-hidden="true"
                            // width="268"
                            height="12"
                            viewBox="0 0 268 12"
                            className="w-[6rem] lg:w-[13rem]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.52152C91.3333 4.35485 270.5 -1.47848 264.5 8.52152"
                                stroke="#D87023"
                                stroke-width="6"
                            />
                        </svg>
                    </span>
                </h1>
                <p className="w-[80%] lg:w-[60%] mx-auto text-center sofia-sans text-sm lg:text-xl">
                    The patient dog eats left overs. Be the first to know when
                    we launch. Join our Waitlist 😎
                </p>
            </div>

            {/* Wailtist button */}
            <div className="justify-center flex flex-col items-center lg:flex-row gap-2 mb-20 lg:mb-40">
                <input
                    name="email"
                    placeholder="Enter your email"
                    className="rounded-xl focus:outline-none focus:border-green mb-4 lg:mb-0 transition-colors duration-100 ease-out w-[85%] lg:w-[20rem] h-[3rem] pl-3 bg-white border border-[D6DAD9] sofia-sans text-dark_second"
                />
                <CtaButton text="Join waitlist" />
            </div>

            <ImageCarousel />
        </header>
    );
}