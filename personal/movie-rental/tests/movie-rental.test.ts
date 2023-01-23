import {returnCustomerRentalStatement} from '../src/movie-rental'
import { customers, movies } from '../src/data'

describe("Movie Rental should", () => {
    it("returns the correct rental record statement", () => {

      const customerStatement = returnCustomerRentalStatement(customers[0], movies);
      expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");

    })
  });
  