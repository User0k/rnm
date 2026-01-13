import type { ReactNode } from 'react';

interface DetailItemProps {
  label: string;
  children: ReactNode;
}

export default function DetailItem({ label, children }: DetailItemProps) {
  return (
    <div className='character-card__detail'>
      <p className='character-card__label'>{label}</p>
      {children}
    </div>
  );
}
