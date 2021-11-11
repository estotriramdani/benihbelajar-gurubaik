import ClassCard from '../../molecules/ClassCard';

export default function ClassCardWrapper() {
  return (
    <div className="flex overflow-y-auto gap-3.5 p-2">
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
    </div>
  );
}
