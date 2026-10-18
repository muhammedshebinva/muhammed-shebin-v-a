import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative border-t border-white/10 bg-slate-950 px-4 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-100 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-300"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>

    <div className="mx-auto flex max-w-5xl flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-slate-300">
        <Socials />
      </div>

      <span className="text-sm text-slate-500">© Copyright {currentYear} Muhammed Shebin V A</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
