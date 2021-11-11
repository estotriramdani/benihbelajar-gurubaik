import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const images = [
  {
    id: 0,
    image: 'https://source.unsplash.com/1208x400/?smart',
    link: '/to-link',
  },
  {
    id: 1,
    image: 'https://source.unsplash.com/1208x400/?study',
    link: '/to-link',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/1208x400/?student',
    link: '/to-link',
  },
];

export default function BannerSlider() {
  const [position, setPosition] = useState(0);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-8 pb-3.5 hidden lg:block">
      <div className="relative w-full rounded-xl">
        <Slider {...settings}>
          {images.map((image) => (
            <Link href={image.link} key={image.id}>
              <a className=" flex justify-center">
                <img
                  src={image.image}
                  alt={image.link}
                  className="rounded-xl w-100 w-full"
                />
              </a>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
