import { SearchApiResponse, Surah, SurahApiResponse } from "@/types/surah";

export const getAllSurah = async (surahName?: string): Promise<Surah[]> => {
  if (!process.env.BASE_API_URL) {
    throw new Error("BASE_API_URL is not defined in environment variables");
  }

  if (surahName && surahName.trim() !== "") {
    const response = await fetch(
      `${process.env.BASE_API_URL}/v1/search/${surahName}/all/en`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error("Failed to fetch search results");
    }

    const result: SearchApiResponse = await response.json();

    const surahs = result.data.matches.map((match) => match.surah);
    const uniqueSurahs = Array.from(
      new Map(surahs.map((surah) => [surah.number, surah])).values(),
    );

    return uniqueSurahs;
  }

  const response = await fetch(`${process.env.BASE_API_URL}/v1/surah`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch surah data");
  }

  const result: SurahApiResponse = await response.json();

  return result.data;
};
