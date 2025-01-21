import CtaButton from "../common/CtaButton";

export default function Footer() {
    return (
        <footer className="mb-10">
            <div className="container mx-auto px-8 lg:px-24">
                <div className="flex flex-col lg:flex-row lg:items-center py-10 px-12 rounded-xl border border-[#EDEFFC] shadow-2xl bg-white justify-between">
                    <div className=" w-[80%] lg:w-[40%]">
                        <p className="font-pangram text-[#353542] mb-10 lg:mb-0 text-2xl font-bold">
                            Signup to{" "}
                            <span className="inline-block p-1 px-2 bg-[#5F63E1] text-white border-2 font-normal border-black rounded-full sofia-sans">
                                chowafrica
                            </span>{" "}
                            and say{" "}
                            <span className="inline-block p-1 px-2 bg-black text-white border-2 font-normal border-green rounded-full sofia-sans">
                                goodbye 👋🏽
                            </span>{" "}
                            to mealtime stress
                        </p>
                    </div>
                    <CtaButton text="Join waitlist" />
                </div>
            </div>
        </footer>
    );
}