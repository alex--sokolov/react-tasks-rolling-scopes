import React from 'react';
import { render, screen } from '@testing-library/react';
import CardStatic from './cardStatic';
import { IMovieStatic } from '../../interfaces';

describe('Card', () => {
  it('renders Card component', () => {
    const movie:IMovieStatic = {
      "adult": false,
      "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
      "budget": 200000000,
      "genres": [{ "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }],
      "homepage": "https://movies.disney.com/cruella",
      "id": 337404,
      "imdb_id": "tt3228774",
      "original_language": "en",
      "original_title": "Cruella",
      "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella\u2019s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
      "popularity": 6107.84,
      "poster_path": "/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
      "production_companies": [{
        "id": 2,
        "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        "name": "Walt Disney Pictures",
        "origin_country": "US"
      }],
      "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
      "release_date": "2021-05-26",
      "revenue": 42600000,
      "runtime": 134,
      "spoken_languages": [{ "english_name": "English", "iso_639_1": "en", "name": "English" }],
      "status": "Released",
      "tagline": "Hello Cruel World",
      "title": "Cruella",
      "video": false,
      "vote_average": 8.8,
      "vote_count": 1474
    };
    render(<CardStatic movie={movie}/>);
    expect(screen.getAllByTestId('card-title')[0] as HTMLElement).toBeInTheDocument();
    expect(screen.getAllByTestId('card-img')[0] as HTMLImageElement).toBeInTheDocument();
    expect(screen.getAllByTestId('card-tagline')[0] as HTMLElement).toBeInTheDocument();
  });
});
