import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(() => [SectionId.About, SectionId.Resume, SectionId.MyStory, SectionId.Portfolio, SectionId.Contact], []);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      'rounded-full px-3 py-2 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300';
    const activeClass = classNames(baseClass, 'bg-white/10 text-lime-200 shadow-[0_0_20px_rgba(163,230,53,0.15)]');
    const inactiveClass = classNames(baseClass, 'text-slate-200/80');

    return (
      <header className="fixed top-4 z-50 hidden w-full px-4 sm:block" id={headerID}>
        <nav className="glass-nav mx-auto flex max-w-4xl items-center justify-center gap-x-2 rounded-full border border-white/10 px-3 py-2">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'rounded-full px-3 py-2 text-left text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300';
    const activeClass = classNames(baseClass, 'bg-lime-400/15 text-lime-200');
    const inactiveClass = classNames(baseClass, 'text-slate-200');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-3 top-3 z-40 rounded-full border border-white/10 bg-slate-900/70 p-2.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-lime-300 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 border-r border-white/10 bg-slate-900/95 p-4 backdrop-blur-xl">
                <nav className="mt-10 flex flex-col gap-y-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      section={section}
                      onClick={toggleOpen}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
