import { useState } from 'react';

import { SearchIcon } from '../../assets/icons';
import logoImage from '../../assets/images/logo.png';
import Input from '../../shared/components/input';
import Layout from '../../shared/components/layout';
import Loader from '../../shared/components/loader';

import './character-list.css';

function CharacterList() {
  const [isLoading] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Layout>
      <div className='container-large character-info'>
        <img
          src={logoImage}
          alt='Rick and Morty main page logo'
          className='character-info__logo'
        />
        <div style={{ display: 'flex', columnGap: 24 }}>
          <Input
            icon={<SearchIcon />}
            placeholder='Filter by name...'
            value={value}
            onChange={onChange}
          />
        </div>
        {isLoading && <Loader label='Loading characters...' />}
      </div>
    </Layout>
  );
}

export default CharacterList;
