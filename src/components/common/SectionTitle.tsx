
interface SectionTitleProps {
    title: string;
    color: string
}
export default function SectionTitle({ title, color }: SectionTitleProps) {
    return (
        <h2 className="flex items-center uppercase gap-3 pangram">
            <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.3235 24L8.57349 15.75L0.323486 12L8.57349 8.25L12.3235 0L16.0735 8.25L24.3235 12L16.0735 15.75L12.3235 24Z"
                    fill={color}
                />
            </svg>
            <span className={`uppercase text-${color} font-pangram text-[15px]`}>{title}</span>

            <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.3235 24L8.57349 15.75L0.323486 12L8.57349 8.25L12.3235 0L16.0735 8.25L24.3235 12L16.0735 15.75L12.3235 24Z"
                    fill={color}
                />
            </svg>
        </h2>
    );
}