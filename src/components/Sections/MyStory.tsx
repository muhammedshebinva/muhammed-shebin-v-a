import {FC, memo, useEffect, useState} from 'react';

import Section from '../../components/Layout/Section';
import TimelineItem from '../../components/Sections/Resume/TimelineItem';
import {SectionId, myStoryTimeline} from '../../data/data';

const storyNarrative = {
  eyebrow: 'Why I am the fit',
  title: 'If you hire me, you gain grounded AI experience that can ship in real operations, not just prototypes.',
  body:
    'For the last four years, I have worked in enterprise environments where accuracy, governance, and business context matter as much as technical elegance. I understand how to bridge AI, engineering, and operations so teams can move faster without losing trust.',
};

const storyHighlights = ['Production AI systems', 'Enterprise trust & controls', 'Cross-functional delivery'];

const MyStory: FC = memo(() => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const storyItems = Array.from(document.querySelectorAll('[data-story-card]'));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.storyCard);
            setVisibleCards(prev => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      {threshold: 0.2},
    );

    storyItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-[#f4f7fb]" sectionId={SectionId.MyStory}>
      <div className="mx-auto max-w-5xl">
        <div className="story-hero reveal-on-scroll mb-12 rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-md md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-700">{storyNarrative.eyebrow}</p>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
              4 years in enterprise AI
            </span>
          </div>

          <h2 className="max-w-3xl text-2xl font-black leading-tight text-slate-900 md:text-4xl">{storyNarrative.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">{storyNarrative.body}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {storyHighlights.map(highlight => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700" key={highlight}>
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {myStoryTimeline.map((item, index) => (
            <div
              className={`story-card rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] ${visibleCards.includes(index) ? 'is-visible' : ''}`}
              data-story-card={index}
              key={`${item.title}-${index}`}>
              <div className="flex items-start gap-4">
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-sm font-bold text-lime-700 sm:flex">
                  {index + 1}
                </div>
                <div className="w-full">
                  <TimelineItem item={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

MyStory.displayName = 'MyStory';
export default MyStory;
