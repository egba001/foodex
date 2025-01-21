import { ButtonProps } from "../../types/componentTypes";

export default function CtaButton({ text }: ButtonProps) {
    return (
        <button className="rounded-3xl bg-green h-[3rem] uppercase px-10 sofia-sans border-2 shadow-md border-white text-[#E9EBEA]">
            {text}
        </button>
    );
}