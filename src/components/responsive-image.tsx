'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

const isRemoteImage = (src: string) => {
  try {
    const url = new URL(src);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

export default function ResponsiveImage({ src, alt, ...props }: ResponsiveImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    // In case of error, fallback to a placeholder image
    setImageSrc('https://via.placeholder.com/150');
  };

  if (isRemoteImage(imageSrc)) {
    // Remote image: use the provided src directly
    return (
      <Image
        src={imageSrc}
        alt={alt}
        onError={handleError}
        {...props}
      />
    );
  }

  // Local image: assume it's in the /public folder
  const localSrc = `/images/${imageSrc}`;

  return (
    <Image
      src={localSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
