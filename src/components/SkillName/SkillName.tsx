import React from 'react';
import type { SkillNameProps } from '../Skill/types';

export function SkillName({ name }: SkillNameProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-center mb-2">
      <span className="text-xs sm:text-sm font-medium text-foreground">
        {name}
      </span>
    </div>
  );
}
