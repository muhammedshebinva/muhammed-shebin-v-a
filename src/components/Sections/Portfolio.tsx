import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const handleCardMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    event.currentTarget.style.transform = `perspective(1200px) rotateX(${(0.5 - y) * 9}deg) rotateY(${(x - 0.5) * 11}deg) translateY(-6px)`;
  };

  const handleCardLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <Section className="bg-[#0b1120]" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">Selected work</p>
          <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">Product thinking, AI systems, and polished UX.</h2>
        </div>

        <div className="w-full columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="mb-4 break-inside-avoid" key={`${title}-${index}`}>
                <div
                  className={classNames('tilt-card relative h-max w-full overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(15,23,42,0.35)]')}
                  onMouseLeave={handleCardLeave}
                  onMouseMove={handleCardMove}>
                  {image ? (
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  ) : (
                    <div className="flex h-56 w-full items-center justify-center bg-neutral-700 text-center text-sm font-medium text-white/80">
                      {title}
                    </div>
                  )}
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-slate-950/80 transition-all duration-300 backdrop-blur-[2px]',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      href={url}
      ref={linkRef}
      target="_blank"
      onClick={handleItemClick}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col justify-between gap-y-2 overflow-y-auto overscroll-contain">
          <span className="inline-flex w-fit rounded-full border border-lime-300/30 bg-lime-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-lime-200">
            Project
          </span>
          <div>
            <h2 className="text-left text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-left text-xs leading-relaxed text-slate-200 sm:text-sm">{description}</p>
          </div>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5" />
      </div>
    </a>
  );
});
