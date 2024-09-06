import { Box, Button, Skeleton, Text } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";
import badgesJson from './../../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";
import EmblaCarousel from "./CustomCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useState } from "react";

const Carousel = () => {
    const badgeList: BadgesData = badgesJson as BadgesData;
    // const activeIndex = Math.floor(badgeList.length / 2);
    const OPTIONS: EmblaOptionsType = { loop: false };
    const [goPrev, setGoPrev] = useState(false);
    const [goNext, setGoNext] = useState(false);

    const handlePrev = () => {
        setGoPrev(!goPrev);
    }
    const handleNext = () => {
        setGoNext(!goNext);
    }

    return (
        <>
            <Box className="flex flex-row justify-between">
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3" onClick={handlePrev}>
                    <Image src={arrowPrev} width={8} height={8} alt="Prev" />
                </Box>

                <Box className="flex flex-row space-x-2 overflow-hidden">
                    {
                        <EmblaCarousel
                            goNext={goNext}
                            goPrev={goPrev}
                            options={OPTIONS}
                            slides={
                                badgeList.map((item, index) => (
                                    <Box className="bzz" key={index}>
                                        {
                                            (index === -12) ? (
                                                <>
                                                    <BadgeCard
                                                        id="pudgyOg"
                                                        title="some hey"
                                                        multiplier={2.1}
                                                        description="some description"
                                                        selected={false}>
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
                                ))} />
                    }
                </Box>

                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3" onClick={handleNext}>
                    <Image src={arrowNext} width={8} height={8} alt="Next" />
                </Box>
            </Box>
        </>
    );
};

export default Carousel;

