import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

type Props = { id: string; children: React.ReactNode };

export function Draggable({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style: React.CSSProperties = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    touchAction: 'none', // 모바일 스크롤/줌 충돌 방지
    cursor: isDragging ? 'grabbing' : 'grab',
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffd54f',
    borderRadius: 12,
    boxShadow: isDragging
      ? '0 8px 24px rgba(0,0,0,.2)'
      : '0 2px 8px rgba(0,0,0,.1)',
    userSelect: 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
