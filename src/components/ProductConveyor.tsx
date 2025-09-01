import React, { useState, useEffect, useRef } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import styles from './ProductConveyor.module.css';

type DraggableBoxProps = {
  pos: { x: number; y: number };
  children?: React.ReactNode;
  className?: string;
};

function DraggableBox({ pos, children, className }: DraggableBoxProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: 'box',
    });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString({
      x: pos.x + (transform?.x ?? 0),
      y: pos.y + (transform?.y ?? 0),
      scaleX: 1,
      scaleY: 1,
    }),
    touchAction: 'none',
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: !isDragging ? 'transform 0.3s linear' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={className}
      {...listeners}
      {...attributes}
    >
      {children ?? 'Drag me'}
    </div>
  );
}

export default function ProductConveyor() {
  const conveyorRef = useRef<HTMLDivElement>(null);

  const boxWidth = 100;
  const boxHeight = 100;

  // Drag me 박스 초기 위치
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [moving, setMoving] = useState(false);

  // 나머지 박스 초기 위치
  const initialBoxes = [
    {
      id: 'p1',
      x: 200,
      y: 80,
      width: 400,
      height: 420,
      content: (
        <div className={styles.chamin}>
          <div className={styles.chamin__info}>
            <p className={styles.fullbox}>
              <span className={styles.boxTitle}>이름 / Name / 名前</span>
              <span className={styles.bold}>정차민</span>
            </p>
            <p className={styles.fullbox}>
              <span className={styles.boxTitle}>
                성별 및 나이 / Gender & Age / 性別・年齢
              </span>
              <span className={styles.bold}>여 / 37</span>
            </p>
            <p className={styles.fullbox}>
              <span className={styles.boxTitle}>
                성연락처 / Phone / 電話番号
              </span>
              <span className={styles.bold}>010-7117-4595</span>
            </p>
            <p className={styles.fullbox}>
              <span className={styles.boxTitle}>직무 / Job / 職種</span>
              <span className={styles.bold}>퍼블리셔</span>
            </p>
            <p className={styles.fullbox}>
              <span className={styles.boxTitle}>스킬 / Skills / スキル</span>
              <span className={styles.bold}>
                Html / Scss / Jquery / Zeplin / React / Ps / Ai / Adobe XD /
                Figma
              </span>
            </p>
            <p className={styles.linebox}>
              <span className={styles.boxTitle}>
                부정・불량 신고는 국번없이 *8282
              </span>
            </p>
          </div>
          <div className={styles.chamin__kcal}>총 내용량 1989kcal</div>
        </div>
      ),
    },
    {
      id: 'p2',
      x: 650,
      y: 50,
      width: 300,
      height: 500,
      content: (
        <div>
          <img
            src="/path/to/image.png"
            alt="fish"
            style={{ width: 80, height: 80 }}
          />
          <span>Fish</span>
        </div>
      ),
    },
    {
      id: 'p3',
      x: 1000,
      y: 50,
      width: 300,
      height: 400,
      content: <strong>JELLY</strong>,
    },
  ];
  const [boxes, setBoxes] = useState(initialBoxes);

  // 드래그 시작 → 애니메이션 시작
  function handleDragStart() {
    setMoving(true);
  }

  // 드래그 종료 → 컨테이너 안에 제한 + 애니메이션 멈춤
  function handleDragEnd(event: any) {
    const { delta } = event;
    if (!conveyorRef.current) return;

    const bounds = conveyorRef.current.getBoundingClientRect();

    let newX = pos.x + delta.x;
    let newY = pos.y + delta.y;

    // 컨테이너 범위 제한
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + boxWidth > bounds.width) newX = bounds.width - boxWidth;
    if (newY + boxHeight > bounds.height) newY = bounds.height - boxHeight;

    setPos({ x: newX, y: newY });
    setMoving(false);
  }

  // 컨베이어 박스 이동
  useEffect(() => {
    if (!moving) return;
    const interval = setInterval(() => {
      setBoxes((prev) =>
        prev.map((b) => {
          if (!conveyorRef.current) return b;
          const width = conveyorRef.current.offsetWidth;
          let newX = b.x - 2; // 왼쪽으로 2px 이동
          if (newX < -boxWidth) newX = width; // 왼쪽 끝 지나면 오른쪽으로
          return { ...b, x: newX };
        })
      );
    }, 16); // 약 60fps
    return () => clearInterval(interval);
  }, [moving]);

  return (
    <div ref={conveyorRef} className={styles.conveyor}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {/* Drag me 박스 */}
        <DraggableBox pos={pos} className={styles.conveyor__bar}>
          DRAG ME
        </DraggableBox>
      </DndContext>

      {/* 나머지 컨베이어 박스 */}
      {boxes.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            left: b.x,
            top: b.y,
            width: b.width, // 개별 박스 width
            height: b.height, // 개별 박스 height
            background: '#90caf9',
            transition: moving ? undefined : 'left 0.3s linear',
          }}
        >
          {b.content}
        </div>
      ))}
    </div>
  );
}
