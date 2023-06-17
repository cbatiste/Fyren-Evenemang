import React, {useState} from "react";
import Image from "next/image";
import {AiOutlineLoading} from "react-icons/ai";

export default function DynamicImage(props) {
  let [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${props.className || ''}`} style={{minHeight: loaded ? 0 : (props.defaultHeight || 0)}}>
      <div className={`absolute inset-1/2 ${!loaded && props.showLoadingIndicator ? '' : 'hidden'}`}>
        <AiOutlineLoading className={`animate-spin delay-100 -mt-3 -ml-3 text-4xl`} />
      </div>
      <Image
        src={props.src}
        alt={props.alt}
        width={0} height={0}
        style={{width: '100%', height: 'auto'}}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
