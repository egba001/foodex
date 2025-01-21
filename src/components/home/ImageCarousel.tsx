import smartphone from '../../assets/images/smartphone.png';

export default function ImageCarousel() {
    // list of file locations for the images displayed in the header
    const listOfImages = [
        "./src/assets/images/foodone.png",
        "./src/assets/images/food_two.png",
        "./src/assets/images/food_three.png",
        "./src/assets/images/food_four.png",
        "./src/assets/images/food_five.png",
        "./src/assets/images/food_six.png",
        "./src/assets/images/food_seven.png",
        "./src/assets/images/food_eight.png",
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
                src={smartphone}
                className="absolute right-8 lg:right-28 -top-8 lg:-top-20 w-[8rem] lg:w-44"
                alt="smartphone"
            />
        </div>
    );
}