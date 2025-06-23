import { Ayah, JuzResponse } from "@/types/juz";

export const getJuzDetail = async (juzNumber: number): Promise<Ayah[]> => {
  if (!process.env.BASE_API_URL) {
    throw new Error("BASE_API_URL is not defined in environment variables");
  }

  const response = await fetch(
    `${process.env.BASE_API_URL}/v1/juz/${juzNumber}/ar.alafasy`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch juz data");
  }

  const result: JuzResponse = await response.json();

  return result.data.ayahs;
};
