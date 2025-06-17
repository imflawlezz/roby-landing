'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ReviewCard } from './ReviewCard';
import {useEffect, useState} from 'react';

const reviews = [
    {
        quote:
            'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
        name: 'CAITLIN WARD',
        title: 'Webflow Founder',
        imageUrl: '/team/caitlin-ward.jpeg',
    },
    {
        quote:
            'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.',
        name: 'MATTHEW WEBSTER',
        title: 'Webflow Founder',
        imageUrl: '/team/matthew-webster.jpeg',
    },
    {
        quote:
            'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
        name: 'PAIGE BRENNAN',
        title: 'Webflow Founder',
        imageUrl: '/team/paige-brennan.jpeg',
    },
    {
        quote:
            'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
        name: 'CAITLIN WARD',
        title: 'Webflow Founder',
        imageUrl: '/team/caitlin-ward.jpeg',
    },
    {
        quote:
            'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.',
        name: 'MATTHEW WEBSTER',
        title: 'Webflow Founder',
        imageUrl: '/team/matthew-webster.jpeg',
    },
    {
        quote:
            'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
        name: 'PAIGE BRENNAN',
        title: 'Webflow Founder',
        imageUrl: '/team/paige-brennan.jpeg',
    },
];

export const ReviewSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        mode: 'snap',
        slides: {
            origin: 'center',
            perView: 'auto',
            spacing: 10,
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.moveToIdx(currentSlide, true);
        }
    }, []);

    return (
        <div className="w-full max-w-screen">
            <div ref={sliderRef} className="keen-slider py-4">
                {reviews.map((review, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div
                            key={index}
                            className="keen-slider__slide flex-shrink-0"
                            style={{ width: '80%', maxWidth: 480 }}
                        >
                            <div
                                className={`transition-all duration-500 mx-auto ${
                                    isActive
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-40 scale-[0.92]'
                                }`}
                            >
                                <ReviewCard {...review} />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center gap-2 mt-3">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-2.5 h-2.5 ${
                            idx === currentSlide ? 'bg-black' : 'bg-gray-300'
                        }`}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                    />
                ))}
            </div>
        </div>
    );
};