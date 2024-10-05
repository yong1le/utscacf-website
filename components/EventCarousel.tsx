import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Event from "@/components/data/Event";

const EventCarousel = () => {
  const events = [
    {
      name: "Kickoff Program!",
      image: "/ministry.png",
      link: "https://google.com",
      description: "First official fall program",
    },
    {
      name: "Prayer Walk",
      image: "/committee.svg",
      link: "https://google.com",
      description: "First official fall program",
    },
  ];

  return (
    <Carousel>
      <CarouselContent className="flex flex-row">
        {events.map((e, i) => (
          <CarouselItem key={i} className="md:basis-1/2 xl:basis-1/3">
            <Event
              key={i}
              name={e.name}
              image={e.image}
              link={e.link}
              description={e.description}
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
