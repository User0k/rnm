import SpinnerLarge from '../../../assets/images/spinner_large.png';
import SpinnerSmall from '../../../assets/images/spinner_large.png';
import './loader.css';

interface LoaderProps {
  size?: 'large' | 'small';
  label?: string;
}

function Loader({ size = 'large', label }: LoaderProps) {
  const spinnerClassName = size === 'large' ? 'loader-large' : 'loader-small';
  const spinnerSource = size === 'large' ? SpinnerLarge : SpinnerSmall;

  return (
    <div className='loader__wrapper'>
      <img
        src={spinnerSource}
        className={spinnerClassName}
        alt='Animated spinner as a portal from Rick and Morty'
      />
      {label && <p className='typography-h3'>{label}</p>}
    </div>
  );
}

export default Loader;
