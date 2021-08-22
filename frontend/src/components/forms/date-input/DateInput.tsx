import React from 'react';
import { getMonthAndYear, getDateFromForm, months } from '../../../utils';


interface Props { 
  fieldName: string;
  label: string;
  value: Date;
  onChange: (evt: any) => void;
  errors?: string[];
};

const DateInput: React.FC<Props> = ({
  fieldName,
  label,
  value,
  onChange,
  errors,
}) => {

  const getListOfYears = (numYears=100, futureYears=5) => (
    [...Array(numYears).keys()].map(
      i => (new Date().getFullYear() - i + futureYears)
    ));

  const handleChange = ({ target }: { target: HTMLSelectElement; }) => {
    const currentDate = value;
    const newDate = getDateFromForm(target.value, currentDate);
    const newEvent = {
      target: {
        name: fieldName,
        value: newDate
      }
    }
    onChange(newEvent);
  }

  return (
    <div className="form--inline">
        <div className="flex-vertical">
            <label htmlFor={fieldName} className="label">
              {label}
            </label>
            <select
                name={fieldName}
                value={getMonthAndYear(value)[0]}
                onChange={handleChange}
                className="select-box">
                <option />
                {months.map((month) => (
                  <option key={month}>{month}</option>
                ))}
            </select>
        </div>

        <div className="flex-vertical">
            <label htmlFor={fieldName} className="label">
              {label}
            </label>
            <select
                name="startYear"
                value={getMonthAndYear(value)[1]}
                onChange={handleChange}
                className="select-box">
                <option />
                {getListOfYears().map(year => (
                  <option key={year}>
                    {year}
                  </option>
                ))}
            </select>
        </div>
    </div>
  );
}

export default DateInput;
