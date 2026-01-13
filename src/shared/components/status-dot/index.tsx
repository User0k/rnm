import './status-dot.scss';

export type Status = 'alive' | 'dead' | 'unknown';

export default function StatusDot({ status }: { status: Status }) {
  return <span className={`status_${status}`}></span>;
}
