export function getRelativeDays(dateInput) {
  const inputDate = new Date(dateInput);
  const currentDate = new Date();

  // Check if the input date is valid
  if (isNaN(inputDate)) {
    return "Invalid date";
  }

  // Calculate the difference in time (in milliseconds)
  const timeDifference = currentDate - inputDate;

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference === 1) {
    return "Yesterday";
  } else if (daysDifference > 1) {
    return `${daysDifference} days`;
  }
}
