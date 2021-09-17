import React from 'react';

import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as FilledStarIcon } from './filled-star.svg';
import { ReactComponent as RepoIcon } from './repo.svg';
import { ReactComponent as ForkIcon } from './fork.svg';
import { ReactComponent as CheckedIcon } from './checked.svg';
import { ReactComponent as ClearIcon } from './clear.svg';

const iconTypes = {
  star: StarIcon,
  'star-filled': FilledStarIcon,
  repo: RepoIcon,
  fork: ForkIcon,
  checked: CheckedIcon,
  clear: ClearIcon,
};

export default function Icon({
  type,
  className,
}: {
  type: keyof typeof iconTypes;
  className?: string;
}) {
  const Component = iconTypes[type];
  return <Component className={className} />;
}
