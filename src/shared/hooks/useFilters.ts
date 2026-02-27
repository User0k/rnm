import { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

import { api } from '@/shared/api';
import type {
  Character,
  FilterState,
  Gender,
  Species,
  Status,
} from '@/shared/types';

import { useDebounce } from '.';

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

  const fetchCharacters = async () => {
    setIsLoading(true);
    toastShownRef.current = false;

    const params: Record<string, string> = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params[key] = value.toLowerCase();
      }
    });

    try {
      const response = await api.get('character', { params });
      setCharacters(response.data.results || []);
    } catch (error) {
      setCharacters([]);

      if (!toastShownRef.current) {
        toastShownRef.current = true;

        if (axios.isAxiosError(error)) {
          toast.error('Check the network connection!');
        } else {
          toast.error('Unable to load characters(');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
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
