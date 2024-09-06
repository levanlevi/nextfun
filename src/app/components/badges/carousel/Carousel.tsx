import { Box, Button, Skeleton, Text } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";
import SwiperWrapper from "./SwiperWrapper";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import badgesJson from './../../../../../public/data/badges.json';
import { BadgesData } from "@/types/badge";


const Carousel = () => {
    const badgeList: BadgesData = badgesJson as BadgesData;
    const activeIndex = Math.floor(badgeList.length / 2);
    const handleSlideChange = (it: SwiperClass) => {
        console.log('onSlideChange parent', it);
    }

    const getSlideStyle = (index: number) => {
        return { width: `${Math.random() * 20}px`, transition: 'width 0.3s' };
    };

    return (
        <>
        <button onClick={() => getSlideStyle(0)}>click here</button>
        <SwiperWrapper
            activeIndex={activeIndex}
            onSlideChange={handleSlideChange}>
            {badgeList.map((item, index) => (
                <SwiperSlide key={item.id} style={getSlideStyle(0)}>
                    {
                        (index === activeIndex) ? (
                            <>
                                <BadgeCard
                                    id={item.id}
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
                                        {item.description}
                                    </Text>
                                </Box>
                            </>
                        ) : (
                            <BadgeCardSkeleton>
                            </BadgeCardSkeleton>
                        )
                    }
                </SwiperSlide>
            ))}
        </SwiperWrapper>
        </>
    );
};

export default Carousel;
