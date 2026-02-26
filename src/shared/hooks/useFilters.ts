import { useEffect, useState } from 'react';

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

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>({
    name: '',
    species: undefined,
    gender: undefined,
    status: undefined,
  });

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = async () => {
    setIsLoading(true);
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

      if (axios.isAxiosError(error)) {
        toast.error(error.message || 'Не удалось загрузить персонажей(');
      } else {
        toast.error('Упс! Что-то пошло не так!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
    console.log(characters);
  }, [filters]);

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
