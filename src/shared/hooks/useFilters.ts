import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import type {
  Character,
  FilterState,
  Gender,
  Species,
  Status,
} from '@/shared/types';
import { useDebounce } from '.';
import { getCharacters } from '../api/getCharacters';

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>({
    name: '',
    species: undefined,
    gender: undefined,
    status: undefined,
  });

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedName = useDebounce(filters.name, 200);
  const toastShownRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchCharacters = async (page: number = 1) => {
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const isInitialLoad = page === 1;

    if (isInitialLoad) {
      setIsLoading(true);
      toastShownRef.current = false;
    } else {
      setIsLoadingMore(true);
    }

    const params = {
      name: filters.name || undefined,
      species: filters.species,
      gender: filters.gender,
      status: filters.status,
      page,
    };

    const result = await getCharacters(params, controller.signal);

    if (abortControllerRef.current !== controller) return;

    if (result.success) {
      setHasMore(page < result.totalPages);
      setCurrentPage(page);
      setCharacters((prev) =>
        isInitialLoad ? result.data : [...prev, ...result.data],
      );
    } else if (!result.cancelled) {
      if (isInitialLoad) {
        setCharacters([]);
      }
      if (!toastShownRef.current) {
        toastShownRef.current = true;
        toast.error(result.error.message);
      }
    }

    if (isInitialLoad) {
      setIsLoading(false);
    } else {
      setIsLoadingMore(false);
    }
    abortControllerRef.current = null;
  };

  const loadMore = () => {
    if (!isLoadingMore && hasMore && !isLoading) {
      fetchCharacters(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchCharacters(1);
    return () => abortControllerRef.current?.abort();
  }, [debouncedName, filters.gender, filters.species, filters.status]);

  const handleNameChange = (value: string) => {
    setFilters((prev) => ({ ...prev, name: value }));
  };

  const handleSpeciesChange = (value: Species | undefined) => {
    setFilters((prev) => ({ ...prev, species: value }));
  };

  const handleGenderChange = (value: Gender | undefined) => {
    setFilters((prev) => ({ ...prev, gender: value }));
  };

  const handleStatusChange = (value: Status | undefined) => {
    setFilters((prev) => ({ ...prev, status: value }));
  };

  return {
    characters,
    filters,
    handleGenderChange,
    handleNameChange,
    handleSpeciesChange,
    handleStatusChange,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMore,
  };
}
