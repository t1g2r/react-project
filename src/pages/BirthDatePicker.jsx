// // BirthDatePicker.jsx

// import React, { useState } from 'react';

// const BirthDatePicker = () => {
//   const [isYearOptionExisted, setIsYearOptionExisted] = useState(false);
//   const [isMonthOptionExisted, setIsMonthOptionExisted] = useState(false);
//   const [isDayOptionExisted, setIsDayOptionExisted] = useState(false);

//   const handleYearFocus = () => {
//     if (!isYearOptionExisted) {
//       setIsYearOptionExisted(true);
//       for (let i = 1940; i <= 2024; i++) {
//         setBirthYearOptions((prevOptions) => [...prevOptions, i]);
//       }
//     }
//   };

//   const handleMonthFocus = () => {
//     if (!isMonthOptionExisted) {
//       setIsMonthOptionExisted(true);
//       for (let i = 1; i <= 12; i++) {
//         setBirthMonthOptions((prevOptions) => [...prevOptions, i]);
//       }
//     }
//   };

//   const handleDayFocus = () => {
//     if (!isDayOptionExisted) {
//       setIsDayOptionExisted(true);
//       for (let i = 1; i <= 31; i++) {
//         setBirthDayOptions((prevOptions) => [...prevOptions, i]);
//       }
//     }
//   };

//   const [birthYearOptions, setBirthYearOptions] = useState([]);
//   const [birthMonthOptions, setBirthMonthOptions] = useState([]);
//   const [birthDayOptions, setBirthDayOptions] = useState([]);

//   return (
//     <div>
//       {/* <label>출생 연도:</label> */}
//       <select id="birth-year" onFocus={handleYearFocus}>
//         {birthYearOptions.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>

//       <label>년</label>
//       <select id="birth-month" onFocus={handleMonthFocus}>
//         {birthMonthOptions.map((month) => (
//           <option key={month} value={month}>
//             {month}
//           </option>
//         ))}
//       </select>

//       <label>월</label>
//       <select id="birth-day" onFocus={handleDayFocus}>
//         {birthDayOptions.map((day) => (
//           <option key={day} value={day}>
//             {day}
//           </option>
//         ))}
//       </select>

//       <label>일</label>
//     </div>
//   );
// };

// export default BirthDatePicker;
