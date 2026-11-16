import React, { useId } from 'react';

interface CollapsibleProps {
  id?: string;
  labelledBy?: string;
  isOpen: boolean;
  onToggle?: () => void;
  trigger?: React.ReactNode;
  triggerClassName?: string;
  className?: string;
  panelClassName?: string;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  id,
  labelledBy,
  isOpen,
  onToggle,
  trigger,
  triggerClassName = '',
  className = '',
  panelClassName = '',
  children,
}) => {
  const autoId = useId();
  const panelId = id ?? `collapsible-panel-${autoId}`;
  const triggerId = `${panelId}-trigger`;
  const regionLabelledBy = labelledBy ?? (trigger ? triggerId : undefined);

  return (
    <div className={className}>
      {trigger && (
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={triggerClassName}
        >
          {trigger}
        </button>
      )}
      <div
        id={panelId}
        role="region"
        aria-labelledby={regionLabelledBy}
        aria-hidden={!isOpen}
        data-open={isOpen ? 'true' : 'false'}
        className={`collapsible-grid ${panelClassName}`}
      >
        <div className="collapsible-inner" inert={!isOpen ? true : undefined}>
          {children}
        </div>
      </div>
    </div>
  );
};
