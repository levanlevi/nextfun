import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useDotButton } from './EmplaCarouselDotButton';
import { numberWithinRange } from '@/utils/numbers';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  goPrev?: boolean;
  goNext?: boolean;
  onActiveIndexChange?: (index: number) => void;
  activeIndex?: number;
};

const TWEEN_FACTOR_BASE = 0.84;

const EmblaCarousel = ({
  slides,
  options,
  goPrev,
  goNext,
  onActiveIndexChange,
  activeIndex
}: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const { selectedIndex, onDotButtonClick } = useDotButton(activeIndex, emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex] || [];

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) {
            return;
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi.on('reInit', () => {
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);
    });
    emblaApi.on('scroll', () => tweenScale(emblaApi));
    emblaApi.on('slideFocus', () => tweenScale(emblaApi));
  }, [emblaApi, tweenScale]);

  useEffect(() => {
    console.log('[selectedIndex[selectedIndex] CHANGE()]:', activeIndex, selectedIndex);
    if (onActiveIndexChange) {
      onActiveIndexChange(selectedIndex);
    }
  }, [selectedIndex]);

  useEffect(() => {
    console.log('[selectedIndex[emblaApi, activeIndex] CHANGE()]:', selectedIndex);
    if (emblaApi && activeIndex != null) {
      emblaApi.scrollTo(activeIndex);
    }
  }, [emblaApi, activeIndex]);

  useEffect(() => {
    console.log('[selectedIndex[emblaApi, goPrev] CHANGE()]:', selectedIndex);
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, goPrev]);

  useEffect(() => {
    console.log('[selectedIndex[emblaApi, goNext] CHANGE()]:', selectedIndex);
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, goNext]);

  const handleCarouselBadgeClick = (index: any) => {
    onDotButtonClick(index);
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}
              onClick={() => handleCarouselBadgeClick(index)}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
