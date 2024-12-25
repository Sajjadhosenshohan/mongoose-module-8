import { TAcademicSemesterCode, TAcademicSemesterName, TMonth, TNameCodeMapper } from "./academicSemester_interface";


export const Months: TMonth[] = [
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

export  const AcademicSemesterName: TAcademicSemesterName[] = [
    'Autumn' , "Summar" , "Fall"
  ]

export  const AcademicSemesterCode: TAcademicSemesterCode[] = [
    "01" , "02" , "03"
  ]

  
export const NameCodeMapper:TNameCodeMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03",
}