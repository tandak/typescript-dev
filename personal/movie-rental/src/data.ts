import { Customer, Movie } from "./types";

export const customers: Array<Customer> = [
  {
    name: "Martin",
    rentals: [
      { movieID: "F001", days: 3 },
      { movieID: "F002", days: 1 },
    ],
  },
  {
    name: "Lori",
    rentals: [
      { movieID: "F004", days: 1 },
      { movieID: "F005", days: 3 },
      { movieID: "F007", days: 2 },
    ],
  },
];

export const movies: Record<string, Movie> = {
  F001: { title: "Ran", code: "regular" },
  F002: { title: "The Matrix", code: "regular" },
  F003: { title: "Avatar: The Way of Water", code: "new" },
  F004: { title: "Avengers: End Game", code: "regular" },
  F005: { title: "Disney Hercules", code: "childrens" },
  F007: { title: "Kung Fu Panda 2", code: "childrens" },
};
