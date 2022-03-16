/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import DatePicker from "react-modern-calendar-datepicker";
import moment from "moment";

const listFieldMandatory = [
  "Name",
  "email",
  "genderCode",
  "dob",
  "password",
  "confirmPassword",
  "mobile",
  "disclamerCheckbox",
  "newMobile",
  "cardholderName",
  "cardnumber",
  "expiryDate",
  "cvv",
];

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  dateFromat: PropTypes.string,
  hasRequire: PropTypes.bool,
};

function DatePickerField(props) {
  const {
    field,
    form,
    label = "",
    placeholder = "",
    disabled = false,
    hasRequire,
  } = props;

  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const isFieldMandatory = listFieldMandatory.includes(name);
  const pathName = window.location.pathname;

  useEffect(() => {
    if (!disabled) return;
    const inputDatePicker = document.querySelector(".DatePicker input");
    inputDatePicker.disabled = true;
  }, [disabled]);

  const newValue =
    !value.day && pathName !== "/member/signUp"
      ? moment(value).format("MM-DD-YYYY")
      : value;

  const objectValue =
    !value.day && pathName !== "/member/signUp"
      ? {
          day: moment(newValue).date(),
          month: moment(newValue).month() + 1,
          year: moment(newValue).year(),
        }
      : newValue;

  const handleChange = (date) => {
    if (disabled) return;
    const changeEvent = {
      target: {
        name,
        value: date,
      },
    };

    field.onChange(changeEvent);
  };

  const formartInputvalue = () => {
    if (value) {
      const formattedMonth = moment()
        .month(objectValue.month - 1)
        .format("MMMM");
      return `${objectValue.day} ${formattedMonth} ${objectValue.year}`;
    }

    return "";
  };
  return (
    <div
      className="custom-input"
      style={{ position: "relative", zIndex: "999" }}
    >
      {label && (
        <label htmlFor={name}>
          {isFieldMandatory || hasRequire ? (
            <>
              {label}
              <span className="custom-input__mandatory">*</span>
            </>
          ) : (
            label
          )}
        </label>
      )}
      <DatePicker
        value={value}
        onChange={handleChange}
        inputPlaceholder={placeholder}
        formatInputText={formartInputvalue}
        inputClassName="my-custom-input"
        shouldHighlightWeekends
      />
      {showError && (
        <p className={showError ? "is-invalid" : ""}>{errors[name]}</p>
      )}
    </div>
  );
}

export default DatePickerField;
