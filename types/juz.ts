export interface Surah {
  numberOfAyahs: number;
}

export interface Sajda {
  id: number;
  recommended: boolean;
  obligatory: boolean;
}

export interface Ayah {
  number: number;
  text: string;
  surah: Surah;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: Sajda | false;
}

export interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: "text" | "audio";
  type: "translation" | "transliteration" | "quran";
  direction: "ltr" | "rtl";
}

export interface JuzResponse {
  code: number;
  status: string;
  data: {
    number: number;
    ayahs: Ayah[];
    surahs: Record<string, Surah>;
    edition: Edition;
  };
}
