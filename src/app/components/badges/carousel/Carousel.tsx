import { Box, Button, Skeleton, Text } from "@radix-ui/themes";
import BadgeCard from "../BadgeCard";
import { BadgeCardSkeleton } from "../BadgeCardSkeleton";
import Image from "next/image";
import { arrowPrev, arrowNext } from "./../../../../../public";
import { BadgesData } from "@/types/badge";
import EmblaCarousel from "./CustomCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useEffect, useState } from "react";
import ActionList from "../actions/ActionList";
import Info from "../Info";

type PropType = {
    badgeList: BadgesData;
    selectedCardId: string | null;
    onSelectedCardChange: (id: string) => void;
}

const Carousel = ({ badgeList, selectedCardId, onSelectedCardChange }: PropType) => {
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

    const handleActiveIndexChange = (index: number) => {
        setActiveIndex(index);
        onSelectedCardChange(badgeList[index].id);
    }

    useEffect(() => {
        if (selectedCardId == null) {
            return;
        }
        const newSelectedIndex = badgeList.findIndex(b => b.id === selectedCardId);
        setActiveIndex(newSelectedIndex);
    }, [selectedCardId]);

    const getSlideCards = () => {
        return badgeList.map((item, index) => {
            const isActive = index === activeIndex;
            return (
                <Box className="embla__slide__badgecard" key={index}>
                    {isActive ? (
                        <Box className="m-0 m-auto w-[176px]">
                            <BadgeCard badge={{ ...item, selected: true }} />
                            <Box className="bg-background-elevation-2 rounded-lg w-[176px] py-1 px-4 mt-2 flex flex-col">
                                <Text className="text-text-primary text-xs font-medium text-center">
                                    Reward Details
                                </Text>
                                <Text className="text-text-secondary text-xs font-medium text-center">
                                    {item.description}
                                </Text>
                            </Box>
                        </Box>
                    ) : (
                        <Box className="h-[98px] w-[96px] m-auto">
                            <BadgeCardSkeleton {...item} />
                        </Box>
                    )}
                </Box>
            )
        });
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
                        onActiveIndexChange={handleActiveIndexChange}
                        activeIndex={activeIndex}
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
            <Info actions={badgeList[activeIndex].actions ?? []}
                earnings={(badgeList[activeIndex].multiplier ?? 1.2) * 1000} />
            <ActionList actions={badgeList[activeIndex].actions ?? []} />
        </>
    );
};

export default Carousel;

