import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section className="bg-[#0b1120] text-white" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-8', {'md:grid-cols-[0.9fr_1.1fr]': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="flex justify-center md:justify-start">
            <div className="glass-card relative w-full max-w-[340px] overflow-hidden rounded-[28px] p-3">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-900/50">
                <Image alt="about-me-image" className="h-[420px] w-full object-cover" priority src={profileImageSrc} />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">About me</p>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">I design AI products with business context and engineering discipline.</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <div className="glass-card rounded-2xl p-4" key={idx}>
                <div className="flex items-start gap-3">
                  {Icon && <Icon className="mt-1 h-5 w-5 shrink-0 text-lime-300" />}
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-sm leading-relaxed text-slate-300">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
