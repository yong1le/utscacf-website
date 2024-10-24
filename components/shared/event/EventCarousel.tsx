import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Event from "@/components/shared/event/Event";

const EventCarousel = async () => {
  const events = [];

  return (
    <Carousel>
      <CarouselContent className="flex flex-row">
        {events.map((e, i) => (
          <CarouselItem key={i} className="md:basis-1/2 xl:basis-1/3">
            <Event
              key={i}
              name={e.entry.name}
              image={e.entry.image}
              link={e.entry.link}
              description={e.entry.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
};

export default EventCarousel;
