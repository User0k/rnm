import { useState } from 'react';

import logoImage from '../../assets/images/logo.png';
import Layout from '../../shared/components/layout';
import Loader from '../../shared/components/loader';
import CharacterCard from '../../widgets/character-card';

import './character-list.scss';

function CharacterList() {
  const [isLoading] = useState(false);

  return (
    <Layout>
      <div className='container-large character-info'>
        <img
          src={logoImage}
          alt='Rick and Morty main page logo'
          className='character-info__logo'
        />
        <div style={{ display: 'flex', columnGap: 24 }}>
          <CharacterCard
            gender='Male'
            location='Earth'
            name='Rick Sanchez'
            species='Human'
            status='Alive'
          />
        </div>
        {isLoading && <Loader label='Loading characters...' />}
      </div>
    </Layout>
  );
}

export default CharacterList;
