import React, { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './SwiperWrapper.module.css';
import { Box } from '@radix-ui/themes';
import Image from 'next/image';
import { arrowPrev, arrowNext } from "./../../../../../public";

interface SwiperWrapperProps {
    children: React.ReactNode;
    activeIndex?: number;
    onPrev?: () => void;
    onNext?: () => void;
    onSlideChange?: (it: SwiperClass) => void;
}

const SwiperWrapper: FC<SwiperWrapperProps> = (props: Readonly<SwiperWrapperProps>) => {
    const swiperRef: any = useRef(null);

    useEffect(() => {
        console.log('swiperRef', props.children);

        if (!swiperRef.current) {
            return;
        }

        if (props.activeIndex != null) {
            swiperRef.current.slideTo(props.activeIndex);
        }

    }, []);


    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }

    const handleSlideChange = (it: SwiperClass) => {
        if (props.onSlideChange) {
            console.log('onSlideChange', it);
            props.onSlideChange(it);
            swiperRef.current.updateSize();
        }
    }

    return (
        <Box className="flex flex-row">
            <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3 mr-8"
                onClick={handlePrev}>
                <Image src={arrowPrev} width={8} height={8} alt="Prev" />
            </Box>
            <Swiper
                centeredSlides={true}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={7}
                onSlideChange={handleSlideChange}
                navigation={false}
                direction="horizontal"
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                {props.children}
            </Swiper>
            <Box className="bg-background-elevation-3 hover:bg-background-elevation-2 cursor-pointer flex items-center justify-center rounded-xl px-3 ml-8"
                onClick={handleNext}>
                <Image src={arrowNext} width={8} height={8} alt="Next" />
            </Box>
        </Box>
    );
};

export default SwiperWrapper;