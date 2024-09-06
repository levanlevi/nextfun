import { Button, Skeleton } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";

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
                <Button>Prev</Button>
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
                <Button>Next</Button>
            </div>
        </>

    );
};

export default Carousel;
