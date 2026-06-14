/**
 * Copyright DrInfinite 2024, 2026
 * SPDX-License-Identifier: MIT
 */

interface IMDbTitle {
  id: string;
  type: string;
  primaryTitle: string;
  primaryImage: PrimaryImage;
  startYear: number;
  runtimeSeconds: number;
  genres: string[];
  rating: Rating;
  plot: string;
  directors: Director[];
  writers: Director[];
  stars: Star[];
  originCountries: OriginCountry[];
  spokenLanguages: OriginCountry[];
  interests: Interest[];
}

interface Interest {
  id: string;
  name: string;
}

interface OriginCountry {
  code: string;
  name: string;
}

interface Star {
  id: string;
  displayName: string;
  alternativeNames?: string[];
  primaryImage: PrimaryImage;
  primaryProfessions: string[];
}

interface Director {
  id: string;
  displayName: string;
  primaryImage: PrimaryImage;
  primaryProfessions: string[];
}

interface Rating {
  aggregateRating: number;
  voteCount: number;
}

interface PrimaryImage {
  url: string;
  width: number;
  height: number;
}

enum DATATYPE {
  TITLE = 'TITLE',
}

export async function getData(id: string, dataType?: DATATYPE) {
  switch (dataType) {
    case 'TITLE': {
      const response = await fetch(`https://api.imdbapi.dev/titles/${id}`);
      const title: IMDbTitle = await response.json();
      return title;
    }
  }

  throw new Error('You triggered a code-path that should never be reached');
}
