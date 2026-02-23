import { useState } from 'react';

import { logoImage } from '@/assets/images';
import { Layout, Loader } from '@/shared/components';
import { CharacterCard, FilterPanel } from '@/widgets';

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
        <div className='character-info__content'>
          <FilterPanel />
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
