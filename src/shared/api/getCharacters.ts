import axios from 'axios';
import { api } from '.';
import type { Character, FilterState } from '../types';

type FetchCharactersResult =
  | { success: true; data: Character[] }
  | { success: false; cancelled: true }
  | {
      success: false;
      cancelled: false;
      error: { message: string };
    };

export async function getCharacters(
  params: Partial<FilterState> = {},
  signal?: AbortSignal,
): Promise<FetchCharactersResult> {
  const queryParams: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      queryParams[key] = value.toLowerCase();
    }
  });

  try {
    const response = await api.get<{ results: Character[] }>('/character', {
      params: queryParams,
      signal,
    });

    return { success: true, data: response.data.results || [] };
  } catch (error) {
    if (axios.isCancel(error)) {
      return { success: false, cancelled: true };
    }

    let message = 'Unable to load characters';

    if (axios.isAxiosError(error)) {
      if (!error.response) {
        message = 'Check the network connection!';
      } else {
        message = `Server error: ${error.response.status}`;
      }
    } else if (error instanceof Error) {
      message = error.message;
    }

    return {
      success: false,
      cancelled: false,
      error: { message },
    };
  }
}
