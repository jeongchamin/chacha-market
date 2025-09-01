import { useDroppable } from '@dnd-kit/core';
import React from 'react';

type Props = { id: string; children: React.ReactNode };

export function Droppable({ id, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style: React.CSSProperties = {
    width: 240,
    height: 160,
    border: '2px dashed #9e9e9e',
    borderRadius: 12,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isOver ? '#e8f5e9' : '#fafafa',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
