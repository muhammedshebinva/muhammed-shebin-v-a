import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;
  const stackPills = ['LangGraph', 'FastAPI', 'React', 'Azure OpenAI', 'RAG', 'ITSM AI'];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    event.currentTarget.style.transform = `perspective(1200px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 14}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <Image
          alt={`${name}-image`}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(163,230,53,0.18),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.88))]" />
        <div className="floating-orb floating-orb-one" />
        <div className="floating-orb floating-orb-two" />
        <div className="floating-orb floating-orb-three" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-lime-300/30 bg-lime-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-lime-200">
              AI Engineer • Full-Stack Builder
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                <span className="block text-slate-300">I build</span>
                <span className="block bg-gradient-to-r from-lime-200 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                  AI systems
                </span>
                <span className="block text-white">that work in reality.</span>
              </h1>

              <div className="max-w-xl space-y-3 text-base text-slate-200 sm:text-lg">{description}</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {stackPills.map(item => (
                <span
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
                  key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {actions.map(({href, text, primary, Icon}) => {
                const isResume = href.includes('.pdf');

                return (
                  <a
                    className={classNames(
                      'inline-flex items-center justify-center gap-x-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(14,116,144,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                      primary
                        ? 'border-lime-300/70 bg-lime-400/10 text-lime-100 ring-offset-slate-900'
                        : 'border-white/20 bg-white/5 text-white ring-white/50',
                    )}
                    href={href}
                    key={text}
                    rel={isResume ? 'noopener noreferrer' : undefined}
                    target={isResume ? '_blank' : undefined}>
                    {text}
                    {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <Socials />
            </div>
          </div>

          <div
            className="luxury-panel relative overflow-hidden rounded-[28px] p-4 sm:p-6"
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_25%)]" />
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-300">
                <span>Current focus</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[9px] text-emerald-200">
                  Live
                </span>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">Enterprise AI systems that turn operational noise into trusted decisions.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="metric-card">
                  <span className="metric-value">4+</span>
                  <span className="metric-label">Years</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">20+</span>
                  <span className="metric-label">AI workflows</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">RAG</span>
                  <span className="metric-label">Knowledge layer</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">ITSM</span>
                  <span className="metric-label">Ops context</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>Stack</span>
                  <span>Production grade</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'React', 'LangChain', 'Azure OpenAI', 'PostgreSQL'].map(tech => (
                    <span className="rounded-full border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-xs text-slate-200" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-100 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-300"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
