import React from 'react';
import Image from 'next/image';

const ImageFormat = ({src, alt, width, height, classIm }: { src:string, alt:string, width:number, height:number, classIm:string}) => {
    return (
          <Image
            className={classIm}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
          />
    );
};

export default ImageFormat;
