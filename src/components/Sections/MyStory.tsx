import {FC, memo} from 'react';

import Section from '../../components/Layout/Section';
import TimelineItem from '../../components/Sections/Resume/TimelineItem';
import {SectionId, myStoryTimeline} from '../../data/data';

const MyStory: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.MyStory}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        {myStoryTimeline.map((item, index) => (
          <TimelineItem item={item} key={`${item.title}-${index}`} />
        ))}
      </div>
    </Section>
  );
});

MyStory.displayName = 'MyStory';
export default MyStory;
