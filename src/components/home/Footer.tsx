import CtaButton from "../common/CtaButton";

export default function Footer() {
    return (
        <footer className="mb-10">
            <div className="container mx-auto px-24">
                <div className="flex items-center py-10 px-12 rounded-xl border shadow-2xl bg-white justify-between">
                    <div className="w-[45%]">
                        <p className="font-pangram text-3xl font-bold">
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