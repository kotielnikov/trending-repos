import React from 'react';

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="color-bg-secondary border-bottom">
      <div className="container-lg p-responsive text-center py-6">
        <h1 className="h1">{title}</h1>

        <p className="f4 color-text-secondary col-md-6 mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
