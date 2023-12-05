import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
} from "@material-tailwind/react";
import { useState } from "react";

export function AccordionWithContent({ featureList }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="md:flex sm:flex">
      {featureList.map((feature, index) => (
        <Accordion open={open === index} key={feature.title}>
          <AccordionHeader
            onClick={() => handleOpen(index)}
            className="text-white justify-center hover:text-indigo-400"
          >
            <span className="justify-center">{feature.title}</span>
          </AccordionHeader>
          <AccordionBody className="text-white items-center flex flex-col ">
            {feature.subList.map((el) => (
              <Chip
                color={feature.chipColor}
                value={el}
                className="w-2/3 justify-center my-2 text-blue-50"
                key={el}
              />
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
