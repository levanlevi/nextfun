import { Box, Button, Skeleton } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";


const Carousel = () => {

    const list: any[] = [{
        name: "Pudgy OG",
        image: "pudgyOg",
        multiplier: "1.5",
        selected: true
    }
        , {
        name: "Discord OG",
        image: "discordOg",
        multiplier: "1.5",
    }
        , {
        name: "Discord OG",
        image: "discordOg",
        multiplier: "1.5",
    }
        , {
        name: "Discord OG",
        image: "discordOg",
        multiplier: "1.5",
    }
        , {
        name: "Discord OG",
        image: "discordOg",
        multiplier: "1.5",
    }
    ];

    return (
        <>
            <div className="carousel-container flex flex-row justify-between">
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3">
                    <Image src={arrowPrev} width={8} height={8} alt="Prev" />
                </Box>
                <div className="carousel-body flex flex-row space-x-2">
                    {list.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            {
                                item.selected ? (
                                    <BadgeCard
                                        name="some hey"
                                        image="pudgyOg"
                                        multiplier="2.1"
                                        selected={false}>
                                    </BadgeCard>
                                ) : (
                                    <BadgeCardSkeleton>
                                    </BadgeCardSkeleton>
                                )
                            }
                        </div>
                    ))}
                </div>
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3">
                    <Image src={arrowNext} width={8} height={8} alt="Next" />
                </Box>
            </div>
        </>

    );
};

export default Carousel;
