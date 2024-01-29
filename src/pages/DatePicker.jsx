// // DatePicker.jsx

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DatePicker = () => {
//   const [birthDate, setBirthDate] = useState(null);

//   const handleDateChange = (date) => {
//     setBirthDate(date);
//   };

//   return (
//     <div>
//       <h2>출생일 선택</h2>
//       <DatePicker
//         selected={birthDate}
//         onChange={handleDateChange}
//         showYearDropdown
//         dateFormat="yyyy-MM-dd"
//       />
//       {birthDate && <p>선택한 출생일: {birthDate.toISOString().split('T')[0]}</p>}
//     </div>
//   );
// };

// export default DatePicker;
