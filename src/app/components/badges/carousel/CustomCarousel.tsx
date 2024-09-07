import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton } from './EmplaCarouselDotButton'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType,
  goPrev?: boolean,
  goNext?: boolean,
  onActiveIndexChange?: (index: number) => void
}

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (props.onActiveIndexChange) {
      props.onActiveIndexChange(selectedIndex);
    }
  }, [selectedIndex]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi
        .scrollSnapList()
        .forEach(
          (scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap?.forEach(slideIndex => {
              if (isScrollEvent && !slidesInView.includes(slideIndex)) {
                return;
              }

              const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
              const scale = numberWithinRange(tweenValue, 0, 1).toString()
              const tweenNode = tweenNodes.current[slideIndex]
              if (tweenNode) {
                tweenNode.style.transform = `scale(${scale})`
              }
            });
          });
    },
    [],
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenScale(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.scrollPrev();
  }, [props.goPrev]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollNext();
  }, [props.goNext]);

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
