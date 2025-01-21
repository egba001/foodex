import { ButtonProps } from "../../types/componentTypes";


export default function MobileCtaButton({ text }: ButtonProps) {
    return (
        <button className="rounded-3xl bg-primary h-[2.5rem] uppercase px-10 sofia-sans text-[#E9EBEA]">
            {text}
        </button>
    );
}
