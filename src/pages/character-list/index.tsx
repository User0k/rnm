import { Toaster } from 'react-hot-toast';

import { logoImage } from '@/assets/images';
import { Layout, Loader } from '@/shared/components';
import { useFilters } from '@/shared/hooks';
import { CharacterCard, FilterPanel } from '@/widgets';

import './character-list.scss';

function CharacterList() {
  const {
    characters,
    isLoading,
    filters,
    handleGenderChange,
    handleNameChange,
    handleSpeciesChange,
    handleStatusChange,
  } = useFilters();

  return (
    <Layout>
      <div className='container-large character-info'>
        <img
          src={logoImage}
          alt='Rick and Morty main page logo'
          className='character-info__logo'
        />
        <div className='character-info__content'>
          <FilterPanel
            filters={filters}
            handleGenderChange={handleGenderChange}
            handleNameChange={handleNameChange}
            handleSpeciesChange={handleSpeciesChange}
            handleStatusChange={handleStatusChange}
          />
          <Toaster
            position='bottom-left'
            toastOptions={{ duration: 2000 }}
          />
          {isLoading ? (
            <Loader label='Загружаю персонажей...' />
          ) : (
            <div className='character-info__list'>
              {characters.map((character) => (
                <CharacterCard
                  {...character}
                  key={character.id}
                  location={character.location.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CharacterList;
