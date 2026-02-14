'use client';

import { Check, Calendar, Scissors, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Check,
    iconBg: '#C4B5FD',
    title: 'Tasks',
    description: 'Stay on top of your to-dos and keep things moving',
  },
  {
    icon: Calendar,
    iconBg: '#FDBA74',
    title: 'Calendar',
    description: 'Link events to notes for a seamless workflow',
  },
  {
    icon: Scissors,
    iconBg: '#93C5FD',
    title: 'Web Clipper',
    description: 'Clip what you see online with a click',
  },
  {
    icon: Users,
    iconBg: '#F9A8D4',
    title: 'Collaborate',
    description: 'Work together as a team in real time',
  },
];

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -364 : 364;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col bg-[#F4F4F5] py-20 gap-12">
      <div className="flex flex-col items-center gap-4 px-20">
        <h2 className="text-5xl font-extrabold text-black text-center">
          Everything you need to work together
        </h2>
        <p className="text-xl text-[#71717A] text-center">
          Powerful tools to help your team collaborate seamlessly
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 px-20 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="min-w-[340px] h-[280px] rounded-2xl bg-white p-10 flex flex-col gap-5 shrink-0"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: feature.iconBg }}
            >
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[28px] font-bold text-black">{feature.title}</h3>
            <p className="text-base text-[#71717A] leading-[1.5] max-w-[260px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full bg-white border-2 border-[#E4E4E7] flex items-center justify-center hover:border-[#D4D4D8] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full bg-white border-2 border-[#E4E4E7] flex items-center justify-center hover:border-[#D4D4D8] transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  );
}
