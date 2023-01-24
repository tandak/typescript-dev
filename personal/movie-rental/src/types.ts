export type Customer = {
  name: string;
  rentals: Array<RentalData>;
};

export type RentalData = {
  movieID: string;
  days: number;
};

export type Code = "new" | "regular" | "childrens";

export type Movie = {
  title: string;
  code: Code;
};
