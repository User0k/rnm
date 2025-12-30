import { useState } from 'react';

import logoImage from '../../assets/images/logo.png';
import Layout from '../../shared/components/layout';
import Loader from '../../shared/components/loader';
import {
  MockedSelectLarge,
  MockedSelectSmall,
} from '../../shared/components/select/mocked-selects';

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
          <MockedSelectLarge />
          <MockedSelectSmall />
        </div>
        {isLoading && <Loader label='Loading characters...' />}
      </div>
    </Layout>
  );
}

export default CharacterList;
