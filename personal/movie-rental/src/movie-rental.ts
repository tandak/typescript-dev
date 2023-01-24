export function returnCustomerRentalStatement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name} `;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie   we
    switch (movie.code) {
      case "regular":
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = r.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movie.code === "new" && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += `[ movie title: ${movie.title}, amount: ${thisAmount}] `;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is: ${totalAmount}. `;
  result += `Customer earned: ${frequentRenterPoints} frequent renter points.`;

  return result;
}
