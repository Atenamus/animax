import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-shrink-0 flex-grow-0 w-[1600px] h-[600px] min-w-0 items-center">
          <img
            src="https://listfist.com/wp-content/uploads/one-piece-cover-stories.jpg "
            alt=""
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-16 left-4 text-left">
            <h1 className="text-4xl font-semibold text-white">One Piece</h1>
            <p className="mt-2 text-sm text-gray-300"></p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-grow-0 w-full min-w-0">
          <img
            src="https://i.pinimg.com/originals/fa/3a/6c/fa3a6cb112638bdda62973e635349fdc.png"
            alt=""
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-16 left-4 text-left">
            <h1 className="text-4xl font-semibold text-white">Naruto</h1>
            <p className="mt-2 text-sm text-gray-300"></p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-grow-0 w-full min-w-0">
          <img
            src="https://i0.wp.com/the-avocado.org/wp-content/uploads/2018/03/one-punch-man-banner.jpg?fit=1600%2C600&ssl=1"
            alt=""
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute bottom-16 left-4 text-left">
            <h1 className="text-4xl font-semibold text-white">One Punch Man</h1>
            <p className="mt-2 text-sm text-gray-300"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
