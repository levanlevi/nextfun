import { Box, Button, Skeleton, Text } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";
import badgesJson from './../../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";
import EmblaCarousel from "./CustomCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useEffect, useState } from "react";

const Carousel = () => {
    const badgeList: BadgesData = badgesJson as BadgesData;
    const [activeIndex, setActiveIndex] = useState(Math.floor(badgeList.length / 2));
    const OPTIONS: EmblaOptionsType = { loop: false };
    const [goPrev, setGoPrev] = useState(false);
    const [goNext, setGoNext] = useState(false);

    const handlePrev = () => {
        setGoPrev(!goPrev);
    }

    const handleNext = () => {
        setGoNext(!goNext);
    }

    useEffect(() => {
        
    }, [activeIndex]);

    const getSlideCards = () => {
        return badgeList.map((item, index) => (
            <Box className="embla__slide__badgecard" key={index}>
                {
                    (index === activeIndex) ? (
                        <>
                            <BadgeCard
                                id="pudgyOg"
                                title={item.title}
                                multiplier={item.multiplier}
                                description={item.description}
                                selected={true}>
                            </BadgeCard>
                            <Box className="bg-background-elevation-2 rounded-lg w-[176px] py-1 px-4 mt-2 flex flex-col">
                                <Text className="text-text-primary text-xs font-medium text-center">
                                    Reward Details
                                </Text>
                                <Text className="text-text-secondary text-xs font-medium text-center">
                                    Liquidity Provision to ETH/USDC
                                </Text>
                            </Box>
                        </>
                    ) : (
                        <BadgeCardSkeleton>
                        </BadgeCardSkeleton>
                    )
                }
            </Box>
        ))
    }

    return (
        <>
            <Box className="flex flex-row justify-between">
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3"
                    onClick={handlePrev}>
                    <Image src={arrowPrev} width={8} height={8} alt="Prev" />
                </Box>

                <Box className="flex flex-row space-x-2 overflow-hidden">
                    {<EmblaCarousel
                        onActiveIndexChange={(index) => setActiveIndex(index)}
                        goNext={goNext}
                        goPrev={goPrev}
                        options={OPTIONS}
                        slides={getSlideCards()} />}
                </Box>

                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3"
                    onClick={handleNext}>
                    <Image src={arrowNext} width={8} height={8} alt="Next" />
                </Box>
            </Box>
        </>
    );
};

export default Carousel;

