import ScrollContainer from 'react-indiana-drag-scroll';
import ClassCard from '../../molecules/ClassCard';

export default function ClassCardWrapper() {
  return (
    <ScrollContainer
      className="flex overflow-y-auto gap-3.5 py-2 lg:py-4 cursor-grab active:cursor-grabbing"
      nativeMobileScroll={true}
    >
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </ScrollContainer>
  );
}
