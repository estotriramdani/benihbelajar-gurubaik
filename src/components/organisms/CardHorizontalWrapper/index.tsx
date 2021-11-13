import { ReactNode } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

interface CardHorizontalWrapperProps {
  children: ReactNode;
}

export default function CardHorizontalWrapper(
  props: CardHorizontalWrapperProps
) {
  const { children } = props;
  return (
    <ScrollContainer
      className="flex overflow-y-auto gap-3.5 py-2 lg:py-4 cursor-grab active:cursor-grabbing relative"
      nativeMobileScroll={true}
    >
      {children}
    </ScrollContainer>
  );
}
