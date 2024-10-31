"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Github, Link } from "lucide-react";
import { Loader2 } from "lucide-react"; // Loader icon from Lucide

const LoadingSpinner = () => (
  <div className="flex items-center justify-center absolute inset-0 bg-white">
    <Loader2 className="animate-spin w-10 h-10 text-primary-deep-blue" />
  </div>
);

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full flex flex-col">
      <div className="relative w-full h-48 md:h-40 lg:h-60 xl:h-80 overflow-hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.name}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-auto object-cover"
                        width={1200}
                        height={800}
                        quality={100}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-white/30 via-transparent hover:bg-white/0" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[80vh]">
                    <ImagePreview images={project.images} index={index} />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            {/* <Badge variant="secondary">{project.category}</Badge> */}
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            {project.liveUrl !== "" && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link className="w-5 h-5" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-xs xl:text-sm text-muted-foreground mb-2">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.tools.map((tool, index) => (
          <Badge
            key={index}
            variant="outline"
            className="font-xs font-medium md:text-[13px]"
          >
            {tool}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

function ImagePreview({
  images,
  index,
}: {
  images: { name: string; alt: string }[];
  index: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [loading, setLoading] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoading(true);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setLoading(true);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-auto h-auto">
      <span>{images[currentIndex].alt}</span>
      {loading && <LoadingSpinner />}
      <Image
        src={images[currentIndex].name}
        alt={images[currentIndex].alt}
        className="w-full h-full object-contain"
        width={1500}
        height={1000}
        quality={100}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        onClick={prevImage}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={nextImage}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
