import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmplaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides: any[]
  options?: EmblaOptionsType,
  goPrev?: boolean,
  goNext?: boolean,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes()
      .map((slideNode) => {
        return slideNode as HTMLElement
      })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'
      const selectedIndex = emblaApi.selectedScrollSnap();

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress

        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) {
            return;
          }
          const tweenNode = tweenNodes.current[slideIndex]
          if (!tweenNode) {
            return;
          }

          if (selectedIndex === snapIndex) {
            tweenNode.style.transform = `scale(1)`;
            return;
          }

          const coefficient = selectedIndex === 0 ? 0.2 : selectedIndex;
          const scale = Math.pow(0.837, Math.abs(coefficient - snapIndex));
          console.log('selectedIndex', selectedIndex,'coefficient',coefficient, 'snapIndex', snapIndex, scale);
          tweenNode.style.transform = `scale(${scale})`;

          // const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          // const scale = numberWithinRange(tweenValue, 0, 1).toString()
          // const tweenNode = tweenNodes.current[slideIndex]
          // if (!tweenNode) {
          //   console.log('-----------------------END---------------------------');
          //   return;
          // }
          // console.log('tweenValue', tweenValue);
          // console.log('tweenNode', tweenNode);
          // console.log('scale', scale);

          // tweenNode.style.transform = `scale(${scale})`
          // console.log('-----------------------END---------------------------');
        });

      })
    },
    []
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [props.goPrev]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [props.goNext]);

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className={`embla__slide ${index === selectedIndex ? 'selected' : ''}`} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;
