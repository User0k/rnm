import axios from 'axios';
import { api } from '.';
import type { Character, FilterState } from '../types';

type FetchCharactersResult =
  | { success: true; data: Character[]; totalPages: number }
  | { success: false; cancelled: true }
  | {
      success: false;
      cancelled: false;
      error: { message: string };
    };

export async function getCharacters(
  params: Partial<FilterState> & { page?: number } = {},
  signal?: AbortSignal,
): Promise<FetchCharactersResult> {
  const { page, ...filters } = params;
  const queryParams: Record<string, string> = {};

  Object.entries(filters).forEach(([key, value]) => {
    if (value && key !== 'page') {
      queryParams[key] = value.toString().toLowerCase();
    }
  });

  if (page) {
    queryParams.page = page.toString();
  }

  try {
    const response = await api.get<{
      results: Character[];
      info: { pages: number };
    }>('/character', {
      params: queryParams,
      signal,
    });

    return {
      success: true,
      data: response.data.results || [],
      totalPages: response.data.info.pages,
    };
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
