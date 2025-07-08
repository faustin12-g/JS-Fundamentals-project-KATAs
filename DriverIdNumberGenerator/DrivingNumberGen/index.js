function generateDrivingLicense(data) {
  const [firstName, middleName, surname, dob, gender] = data;

  // 1–5: Surname (padded with 9s)
  const surnamePart = (surname.toUpperCase() + '99999').slice(0, 5);

  // Parse date of birth
  const [dayStr, monthStr, yearStr] = dob.split('-');
  const day = dayStr.padStart(2, '0');
  const year = yearStr;
  const decadeDigit = year[2];
  const yearDigit = year[3];

  // Convert month name to number
  const monthNames = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];
  const monthIndex = monthNames.findIndex(m => m === monthStr.toUpperCase().slice(0, 3));
  let month = monthIndex + 1;
  if (gender.toUpperCase() === 'F') {
    month += 50;
  }
  const monthPart = month.toString().padStart(2, '0');

  // 12–13: Initials of first and middle name (middle = 9 if missing)
  const initial1 = firstName[0].toUpperCase();
  const initial2 = middleName ? middleName[0].toUpperCase() : '9';
  const initials = initial1 + initial2;

  // Fixed part
  const fixedDigit = '9';
  const checkDigits = 'AA';

  // Final license number
  return (
    surnamePart +
    decadeDigit +
    monthPart +
    day +
    yearDigit +
    initials +
    fixedDigit +
    checkDigits
  ).toUpperCase();
}

var data = ["Andrew","Robert","Lee","02-September-1981","M"]
generateDrivingLicense(data)