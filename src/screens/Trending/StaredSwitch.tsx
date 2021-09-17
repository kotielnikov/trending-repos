import React, { ReactNode } from 'react';

function StaredSwitchItem({
  children,
  selected,
  onClick,
}: {
  children: ReactNode;
  selected: boolean;
  onClick(): void;
}) {
  return (
    <button
      type="button"
      className={`${selected ? 'selected' : ''} subnav-item`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function StaredSwitch({
  showStaredOnly,
  setShowStaredOnly,
}: {
  showStaredOnly: boolean;
  setShowStaredOnly(value: boolean): void;
}) {
  return (
    <div className="subnav mb-0">
      <StaredSwitchItem
        selected={!showStaredOnly}
        onClick={() => setShowStaredOnly(false)}
      >
        All
      </StaredSwitchItem>
      <StaredSwitchItem
        selected={showStaredOnly}
        onClick={() => setShowStaredOnly(true)}
      >
        Stared
      </StaredSwitchItem>
    </div>
  );
}
