import { ReactNode } from 'react';

interface HeadingWithLineProps {
  title: string;
}

export default function HeadingWithLine(props: HeadingWithLineProps) {
  const { title } = props;
  return (
    <div className="mt-4 lg:mt-2 mb-3 flex gap-3 items-center">
      <p className="text-primary text-lg">{title}</p>
      <div className="h-px w-full flex bg-primary"></div>
    </div>
  );
}
