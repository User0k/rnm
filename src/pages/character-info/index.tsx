import Layout from '../../shared/components/layout';
import { ArrowIcon } from '../../assets/icons';
import Loader from '../../shared/components/loader';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './character-info.css';

function CharacterInfo() {
  const [isLoading] = useState(true);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className='container-medium character-info__button-wrapper'>
        <button
          className='character-info__button-back'
          onClick={handleGoBack}
        >
          <ArrowIcon />
          <span className='typography-h3'>go back</span>
        </button>
      </div>
      <div className='container-medium'>
        {isLoading && <Loader label='Loading character card...' />}
      </div>
    </Layout>
  );
}

export default CharacterInfo;
