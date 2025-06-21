import { DetailedSurah, DetailedSurahApiResponse } from "@/types/surah";

export const getSurahDetail = async (
  surahNumber: number,
): Promise<DetailedSurah[]> => {
  if (!process.env.BASE_API_URL) {
    throw new Error("BASE_API_URL is not defined in environment variables");
  }

  const response = await fetch(
    `${process.env.BASE_API_URL}/v1/surah/${surahNumber}/editions/en.sahih,ar.alafasy`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch surah data");
  }

  const result: DetailedSurahApiResponse = await response.json();

  return result.data;
};
