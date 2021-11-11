interface HeadingGroupProps {
  title: string;
  subtitle: string;
}

export default function HeadingGroup(props: HeadingGroupProps) {
  const { title, subtitle } = props;
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-normal font-sans text-gray-800 text-center">
        {title}
      </h1>
      <p className="font-sans text-base text-gray-800 text-center lg:w-1/2 mx-auto mt-3">
        {subtitle}
      </p>
    </>
  );
}
