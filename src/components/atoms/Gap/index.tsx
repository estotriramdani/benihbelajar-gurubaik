interface GapProps {
  display?: 'block' | 'inline-block' | 'inline';
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Gap(props: GapProps) {
  const { display, height, width, className } = props;

  return <div style={{ height, width, display }} className={className} />;
}
