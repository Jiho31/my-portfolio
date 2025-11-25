type MonthAbbrev =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

type Year = `${number}${number}${number}${number}`;
type MonthYearFormat = `${MonthAbbrev} ${Year}`;

interface Experience {
  companyName: string;
  roleTitle: string;
  roleType: "Full-time" | "Intern";
  startDate: MonthYearFormat;
  endDate: MonthYearFormat | undefined; // ongoing
  description: string[];
  techStack?: string[];
}
export type { Experience };
