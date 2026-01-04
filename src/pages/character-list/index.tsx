import { useState } from 'react';

import logoImage from '../../assets/images/logo.png';
import Layout from '../../shared/components/layout';
import Loader from '../../shared/components/loader';

import {
  LargeInput,
  SmallInput,
} from '../../shared/components/input/mocked-inputs';
import './character-list.css';

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
          <LargeInput />
          <SmallInput />
        </div>
        {isLoading && <Loader label='Loading characters...' />}
      </div>
    </Layout>
  );
}

export default CharacterList;
