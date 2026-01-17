import type { ReactNode } from 'react';

interface DetailItemProps {
  label: string;
  children: ReactNode;
}

export default function FormItem({ label, children }: DetailItemProps) {
  return (
    <div className='character-card__detail'>
      <label>{label}</label>
      {children}
    </div>
  );
}
