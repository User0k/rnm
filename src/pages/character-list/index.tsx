import { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';

import { logoImage } from '@/assets/images';
import { Layout, Loader } from '@/shared/components';
import { useFilters, useIntersectionObserver } from '@/shared/hooks';
import { CharacterCard, FilterPanel } from '@/widgets';

import './character-list.scss';

function CharacterList() {
  const {
    characters,
    isLoading,
    isLoadingMore,
    hasMore,
    filters,
    handleGenderChange,
    handleNameChange,
    handleSpeciesChange,
    handleStatusChange,
    loadMore,
  } = useFilters();

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(loadMoreRef, {
    threshold: 0.1,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (isIntersecting && hasMore && !isLoadingMore && !isLoading) {
      loadMore();
    }
  }, [isIntersecting, hasMore, isLoadingMore, isLoading, loadMore]);

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
            <Loader label='Loading characters...' />
          ) : (
            <>
              <div className='character-info__list'>
                {characters.map((character) => (
                  <CharacterCard
                    {...character}
                    key={character.id}
                    location={character.location.name}
                  />
                ))}
              </div>
              <div ref={loadMoreRef}>
                {isLoadingMore && <Loader size='small' />}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CharacterList;
