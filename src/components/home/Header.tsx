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
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header
            className="w-full rounded-2xl bg-dark pt-20 text-white overflow-hidden"
            style={{
                backgroundImage:
                    "url('./src/assets/images/header_background.png')",
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

                <h1 className="text-6xl mb-5 mx-auto transition-transform duration-300 ease-in-out inline-flex">
                    <span className="font-pangram text-8xl">Find chow,</span>

                    <span
                        key={animationKey}
                        className="inline-block courgette-regular text-8xl text-green gap-1 animate-slide-in"
                    >
                        {listOfDynamicTexts[currentTextIndex]}
                        <svg
                            aria-hidden="true"
                            width="268"
                            height="12"
                            viewBox="0 0 268 12"
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
                <p className="w-[60%] mx-auto text-center sofia-sans text-xl">
                    The patient dog eats left overs. Be the first to know when
                    we launch. Join our Waitlist 😎
                </p>
            </div>

            {/* Wailtist button */}
            <div className="justify-center flex gap-2 mb-40">
                <input
                    name="email"
                    placeholder="Enter your email"
                    className="rounded-xl focus:outline-none focus:border-green transition-colors duration-100 ease-out w-[20rem] h-[3rem] pl-3 bg-white border border-[D6DAD9] sofia-sans text-dark_second"
                />
                <CtaButton text="Join waitlist" />
            </div>

            <ImageCarousel />
        </header>
    );
}