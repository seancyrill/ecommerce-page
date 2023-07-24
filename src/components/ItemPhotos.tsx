import { useRef, useState } from "react";

type ItemPhotosType = {
    images: {
        full: string[];
        thumbnail: string[];
    }
}

export default function ItemPhotos({ images }: ItemPhotosType) {
    const [imgDisplay, setImgDisplay] = useState(0)
    const fullScreen = useRef<HTMLDialogElement>(null)

  return (<>
    <div className="flex flex-col">
      {<div className="relative flex max-h-[40%] lg:max-h-full">
          <div onClick={() => setImgDisplay(prev => prev > 0 ? prev - 1 : prev)} className="lg:hidden absolute top-1/2 -translate-y-1/2 bg-White w-12 h-12 grid place-content-center rounded-full cursor-pointer z-10 hover:opacity-50 ml-2"><img src="/images/icon-previous.svg" alt="previousBtn"/></div>
          <img src={images.full[imgDisplay]} alt="imgDisplayed" onClick={() => fullScreen.current?.showModal()} className="w-full lg:max-w-xl lg:min-w-[380px] lg: object-cover mb-4 lg:mb-8 sm:rounded-xl hover:opacity-90 hover:border-4 hover:border-Orange"/>
          <div onClick={() => setImgDisplay(prev => prev + 1 !== images.full.length ? prev + 1 : prev)} className="lg:hidden  absolute top-1/2 -translate-y-1/2 right-0 bg-White w-12 h-12 grid place-content-center rounded-full cursor-pointer z-10 hover:opacity-50 mr-2" ><img src="/images/icon-next.svg" alt="nextBtn" className="" /></div>
      </div>
      }
      <div className="w-full max-w-xl min-w-[380px] justify-between hidden lg:flex">
        {images.thumbnail.map((img, i) => (
            <img onClick={() => setImgDisplay(i)} src={img} alt={`itemPhoto${i}`} key={i} className={`w-20 h-20 object-cover rounded-xl hover:opacity-50 ${i === imgDisplay ? 'border-4 border-Orange' : ''} `}/>
            ))}
      </div>
    </div>

    <dialog ref={fullScreen} className="bg-transparent">
      <div className='cursor-pointer absolute top-0 right-0 p-4 flex' onClick={() => fullScreen.current?.close()}><img src="/images/icon-close.svg" alt="closeMenu" /></div>
      <img src={images.full[imgDisplay]} alt="imgFScreen" onClick={() => fullScreen.current?.close()} className="mb-4 rounded-xl lg:max-h-[600px] cursor-pointer"/>
      <div className="w-full justify-center items-center gap-4 hidden sm:flex">
      {images.thumbnail.map((img, i) => (
          <img onClick={() => setImgDisplay(i)} src={img} alt={`itemPhoto${i}`} key={i} className={`w-20 h-20 object-cover rounded-xl hover:opacity-50 ${i === imgDisplay ? 'border-4 border-Orange' : ''} `}/>
          ))}
      </div>
    </dialog>

</>
  )
}
