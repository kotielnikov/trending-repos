import React from 'react';
import Icon from '../Icon';

export default function MenuItem({
  value,
  onClick,
  isSelected,
}: {
  value: string;
  onClick(): void;
  isSelected: boolean;
}) {
  return (
    <a
      data-testid={`dropdown-menu-item-${value}`}
      onClick={onClick}
      className={`select-menu-item ${isSelected ? 'selected' : ''}`}
    >
      {isSelected ? (
        <Icon type="checked" className="select-menu-item-icon" />
      ) : null}

      <span className="select-menu-item-text">{value}</span>
    </a>
  );
}
