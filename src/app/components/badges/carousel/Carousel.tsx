import { Box, Button, Skeleton, Text } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";
import badgesJson from './../../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";


const Carousel = () => {
    const badgeList: BadgesData = badgesJson as BadgesData;

    const activeIndex = Math.floor(badgeList.length / 2);


    return (
        <>
            <Box className="flex flex-row justify-between">
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3">
                    <Image src={arrowPrev} width={8} height={8} alt="Prev" />
                </Box>
                <Box className="flex flex-row space-x-2">
                    {badgeList.map((item, index) => (
                        <Box className="bzz" key={index}>
                            {
                                (index === activeIndex) ? (
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
                    ))}
                </Box>
                <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3">
                    <Image src={arrowNext} width={8} height={8} alt="Next" />
                </Box>
            </Box>
        </>
    );
};

export default Carousel;
