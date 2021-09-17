import React, { useRef } from 'react';
import ClearItem from './ClearItem';
import MenuItem from './MenuItem';

export default function DropdownMenu({
  items,
  value,
  title,
  header,
  onChange,
  resetTitle,
}: {
  items: Array<string>;
  value?: string;
  title: string;
  header: string;
  onChange(value?: string): void;
  resetTitle: string;
}) {
  const detailsRef = useRef<HTMLElement | null>(null);

  const handleChange = (newValue?: string) => {
    onChange(newValue);
    detailsRef.current?.removeAttribute('open');
  };

  return (
    <div className="mb-3 mb-sm-0 table-list-header-toggle">
      <details
        className="details-reset details-overlay select-menu select-menu-modal-right hx_rsm"
        ref={detailsRef}
      >
        <summary role="button" className="select-menu-button btn-link p-0">
          {title}: <span className="text-bold">{value || 'Any'}</span>
        </summary>
        <div
          className="select-menu-modal position-absolute right-0"
          style={{ zIndex: 99 }}
        >
          <div className="select-menu-header">
            <span className="select-menu-title">{header}</span>
          </div>

          <div className="select-menu-list">
            {value ? (
              <ClearItem
                title={resetTitle}
                onClick={() => handleChange(undefined)}
              />
            ) : null}

            {items.map(item => (
              <MenuItem
                key={item}
                onClick={() => handleChange(item)}
                value={item}
                isSelected={value === item}
              />
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
