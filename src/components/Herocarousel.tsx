import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Herocarousel = () => {
  return (
    <div className=' hidden lg:block'>
      <Carousel>
          <CarouselContent>
            {carouselImages.map((image, index)=>{

              return(
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className=' p-2'>
                        <img src={image} className=' w-full h-[24rem] object-cover rounded-md' alt='carousel images' />
                      </CardContent>
                    </Card>
                  </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default Herocarousel