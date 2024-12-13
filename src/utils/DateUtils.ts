class DateUtils {
  static getFormattedDate(date: Date): string {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[date.getDay()]; //Get the day name
    const day = date.getDate(); //Get the day e.g. 13
    const monthName = months[date.getMonth()]; //Get the month name e.g. January
    const year = date.getFullYear(); //Get the year e.g. 2024

    return `${dayName}, ${day} ${monthName} ${year}`;
  }

  static formatDateString(date: string): string {
    if (date) {
      const fmtDate = new Date(date);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(fmtDate);
    }
    return "";
  }
}
export default DateUtils;
