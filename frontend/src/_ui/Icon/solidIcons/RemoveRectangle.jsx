import React from 'react';

const RemoveRectangle = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 2.78906H18.5C20.7091 2.78906 22.5 4.57992 22.5 6.78906V18.7891C22.5 20.9982 20.7091 22.7891 18.5 22.7891H6.5C4.29086 22.7891 2.5 20.9982 2.5 18.7891V6.78906C2.5 4.57992 4.29086 2.78906 6.5 2.78906ZM15.8588 9.43035C16.1517 9.72325 16.1517 10.1981 15.8588 10.491L13.5607 12.7891L15.8588 15.0871C16.1517 15.38 16.1517 15.8549 15.8588 16.1478C15.5659 16.4407 15.091 16.4407 14.7981 16.1478L12.5001 13.8497L10.2019 16.1479C9.90901 16.4408 9.43414 16.4408 9.14125 16.1479C8.84835 15.855 8.84835 15.3801 9.14125 15.0872L11.4394 12.7891L9.14125 10.4909C8.84836 10.198 8.84836 9.72314 9.14125 9.43025C9.43415 9.13735 9.90902 9.13735 10.2019 9.43025L12.5001 11.7284L14.7981 9.43035C15.091 9.13746 15.5659 9.13746 15.8588 9.43035Z"
      fill={fill}
    />
  </svg>
);

export default RemoveRectangle;