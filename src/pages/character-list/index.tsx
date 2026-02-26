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
            onGenderChange={handleGenderChange}
            onNameChange={handleNameChange}
            onSpeciesChange={handleSpeciesChange}
            onStatusChange={handleStatusChange}
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
