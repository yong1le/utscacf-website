import { EventType } from "@/types";
import Img from "@/components/shared/ui/Img";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Event = ({ name, image, link, description }: EventType) => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-[200px] w-[100%]">
        <Img src={image || "/ministry.png"} alt="Event Image" />
      </div>
      <CardContent className="flex flex-col items-start gap-3 pt-6">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <Button asChild>
        <Link href={link}>Learn More</Link>
      </Button>
    </Card>
  );
};

export default Event;
