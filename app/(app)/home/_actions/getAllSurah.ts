import { Surah } from "@/types/surah";

export const getAllSurah = async (): Promise<Surah[]> => {
  if (!process.env.BASE_API_URL) {
    throw new Error("BASE_API_URL is not defined in environment variables");
  }

  const response = await fetch(`${process.env.BASE_API_URL}/v1/surah`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch surah data");
  }

  const result: { data: Surah[] } = await response.json();

  return result.data;
};
