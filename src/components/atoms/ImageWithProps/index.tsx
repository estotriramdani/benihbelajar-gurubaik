import Image from 'next/image';
import { rgbDataURL } from '../../../utils/images/colorBlurry';

interface ImageWithPropsProps {
  src: string;
}

export default function ImageWithProps(props: ImageWithPropsProps) {
  const { src } = props;
  return (
    <div>
      <Image
        src={src}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL={rgbDataURL(187, 21, 41)}
        objectFit="cover"
      />
    </div>
  );
}
