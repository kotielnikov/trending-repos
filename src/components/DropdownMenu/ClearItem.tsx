import React from 'react';
import Icon from '../Icon';

export default function ClearItem({
  title,
  onClick,
}: {
  title: string;
  onClick(): void;
}) {
  return (
    <div className="select-menu-clear-item select-menu-item">
      <Icon type="clear" className="select-menu-item-icon" />
      <a className="select-menu-item-text" onClick={onClick}>
        {title}
      </a>
    </div>
  );
}
