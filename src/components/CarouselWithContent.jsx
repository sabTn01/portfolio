import { Carousel, Typography } from "@material-tailwind/react";
import { AccordionWithContent } from "./AccordionWithContent";

export function CarouselWithContent({ features }) {
  return (
    <Carousel
      transition={{ type: "tween", duration: 1 }}
      autoplay={false}
      autoplayDelay={10000}
      loop={true}
      className="rounded-xl"
    >
      {features.map((feature) => (
        <div className="flex flex-col justify-center" key={feature.name}>
          <Typography
            variant="h4"
            color="white"
            className="text-center text-3xl font-bold py-20"
          >
            {feature.name}
          </Typography>
          <div className="gap-2 ">
            {feature.description && (
              <Typography
                variant="lead"
                color="white"
                className="mx-32 opacity-80 font-bold hover:text-2xl hover:bg-gray-600 hover:rounded-md"
              >
                {feature.description}
              </Typography>
            )}
            {feature.list && (
              <AccordionWithContent featureList={feature.list} />
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
