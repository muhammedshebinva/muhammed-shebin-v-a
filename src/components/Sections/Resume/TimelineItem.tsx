import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center text-slate-700 last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-start">
          <span className="text-sm font-medium italic text-slate-700">{location}</span>
          <span className="hidden text-slate-500 sm:inline">•</span>
          <span className="text-sm text-slate-600">{date}</span>
        </div>
      </div>
      <div className="text-slate-700">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
