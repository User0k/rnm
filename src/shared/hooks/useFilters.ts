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

  const debouncedName = useDebounce(filters.name, 200);
  const toastShownRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchCharacters = async () => {
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    toastShownRef.current = false;

    const params = {
      name: filters.name || undefined,
      species: filters.species,
      gender: filters.gender,
      status: filters.status,
    };

    const result = await getCharacters(params, controller.signal);

    if (abortControllerRef.current !== controller) return;

    if (result.success) {
      setCharacters(result.data);
    } else if (!result.cancelled) {
      setCharacters([]);

      if (!toastShownRef.current) {
        toastShownRef.current = true;
        toast.error(result.error.message);
      }
    }

    setIsLoading(false);
    abortControllerRef.current = null;
  };

  useEffect(() => {
    fetchCharacters();
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
  };
}
