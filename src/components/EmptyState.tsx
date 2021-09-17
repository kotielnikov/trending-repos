import React, { ReactNode } from 'react';

export default function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="blankslate">
      <h3 className="mb-1">{children}</h3>
    </div>
  );
}
