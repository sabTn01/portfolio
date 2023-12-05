import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProjectCard({ item }) {
  return (
    <Card className="mt-6 w-full hover:bg-blue-200">
      <CardHeader color="blue-gray" className="relative h-56">
        <a href={item.link} className="inline-block" target="blank">
          <img src={item.img} alt="card-image" />
        </a>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.title}
        </Typography>
        <Typography>{item.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={item.link} className="inline-block" target="blank">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Take a look
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
export default ProjectCard;
