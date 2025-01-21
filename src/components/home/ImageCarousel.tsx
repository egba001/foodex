import smartphone from '../../assets/images/smartphone.png';

export default function ImageCarousel() {
    // list of file locations for the images displayed in the header
    const listOfImages = [
        "foodone.png",
        "food_two.png",
        "food_three.png",
        "food_four.png",
        "food_five.png",
        "food_six.png",
        "food_seven.png",
        "food_eight.png",
    ];

    return (
        <div className='relative w-full'>
            <ul className="flex items-center w-full animate-infinite-scroll">
                {listOfImages.map((image, index) => (
                    <img
                        src={`./src/assets/images/${image}`}
                        width={195}
                        alt={`Food ${index + 1}`}
                        key={index}
                    />
                ))}
                {/* Duplicated Images */}
                {listOfImages.map((src, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={`./src/assets/images/${src}`}
                        width={195}
                        alt={`Image ${index + 1}`}
                        className="h-full"
                    />
                ))}
            </ul>
            {/* SMartphone image */}
            <img src={smartphone} className='absolute right-28 -top-24' width={200} alt="smartphone" />
        </div>
    );
}