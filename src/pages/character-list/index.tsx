import { useState } from 'react';

import logoImage from '../../assets/images/logo.png';
import Layout from '../../shared/components/layout';
import Loader from '../../shared/components/loader';

import './character-list.css';

function CharacterList() {
  const [isLoading] = useState(true);

  return (
    <Layout>
      <div className='container-large character-info'>
        <img
          src={logoImage}
          alt='Rick and Morty main page logo'
          className='character-info__logo'
        />
        {isLoading && <Loader label='Loading characters...' />}
      </div>
    </Layout>
  );
}

export default CharacterList;
