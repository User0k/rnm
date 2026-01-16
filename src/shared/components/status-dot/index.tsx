import type { Status } from '../../types';

import './status-dot.scss';

export default function StatusDot({ status }: { status: Status }) {
  return <span className={`status_${status.toLowerCase()}`}></span>;
}
