import { useState } from "react"
import NextImage, { ImageProps } from "next/image"

type ProgressiveImageProps = Omit<ImageProps, 'onLoad'>;

const Image = (props: ProgressiveImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <NextImage
      {...props}
      quality={imageLoaded ? 75 : 1}
      onLoad={() => setImageLoaded(true)}
    />
  );
};

export default Image;