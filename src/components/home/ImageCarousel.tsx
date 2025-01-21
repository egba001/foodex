export default function ImageCarousel() {
    // list of file locations for the images displayed in the header
    const listOfImages = [
        "/images/foodone.png",
        "/images/food_two.png",
        "/images/food_three.png",
        "/images/food_four.png",
        "/images/food_five.png",
        "/images/food_six.png",
        "/images/food_seven.png",
        "/images/food_eight.png",
    ];

    return (
        <div className="relative w-full">
            <ul className="flex items-center w-full animate-infinite-scroll">
                {listOfImages.map((image, index) => (
                    <img
                        src={image}
                        className="w-[8rem] lg:w-[12rem]"
                        alt={`Food ${index + 1}`}
                        key={index}
                    />
                ))}
                {/* Duplicated Images */}
                {listOfImages.map((src, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={src}
                        className="w-[8rem] lg:w-[12rem]"
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </ul>
            {/* SMartphone image */}
            <img
                src="/images/smartphone.png"
                className="absolute right-8 lg:right-28 -top-8 lg:-top-20 w-[8rem] lg:w-44"
                alt="smartphone"
            />
        </div>
    );
}