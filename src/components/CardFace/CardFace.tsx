'use client';

import Image from 'next/image';
import { RotateCcw, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProjectActionButton from '../ProjectActionButton/ProjectActionButton';
import type { CardFaceProps } from '../ProjectCard/types';
import { getOptimizedImageProps } from '@/lib/image-utils';

export function CardFront({ project, onFlip }: Omit<CardFaceProps, 'isFlipped'>) {
  return (
    <div className="w-full h-full">
      <Card
        className="min-h-80 cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
        onClick={onFlip}
      >
        <CardContent className="p-0 flex flex-col flex-1">
          <div className="relative overflow-hidden rounded-t-xl">
            <Image
              src={project.image.url}
              alt={project.image.alt}
              width={400}
              height={200}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              {...getOptimizedImageProps('project')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          <div className="p-6 flex flex-col flex-1">
            <CardHeader className="p-0 space-y-2 flex-1">
              <CardTitle className="text-xl font-bold text-foreground">
                {project.name}
              </CardTitle>
              <CardDescription 
                id={`project-${project.id}-description`}
                className="text-muted-foreground leading-relaxed"
              >
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <div className="mt-4 flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip();
                }}
                className="text-muted-foreground hover:text-foreground"
                aria-label="View project actions and links"
              >
                <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
                View Actions
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CardBack({ project, onFlip }: Omit<CardFaceProps, 'isFlipped'>) {
  return (
    <div className="w-full h-full">
      <Card className="min-h-80 bg-gradient-to-br from-card via-card to-muted/20">
        <CardContent className="p-6 h-full flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <CardTitle className="text-2xl font-bold text-foreground mb-3">
              {project.name}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              Explore this project through the links below
            </CardDescription>
          </div>

          <div className="flex flex-col w-full gap-3 mb-6">
            {project.links.map((link, index) => (
              <ProjectActionButton
                key={`${link.type}-${index}`}
                link={link}
                index={index}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onFlip}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Return to project details view"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
