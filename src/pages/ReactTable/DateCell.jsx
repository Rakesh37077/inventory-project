import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { BsCalendarEvent } from "react-icons/bs";

const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
  <>
    <div
      className="text-center cursor-pointer text-white pl-2"
      onClick={onClick}
      ref={ref}
    >
      {value ? (
        <>
          {value}
          {/* <div
            className="absolute top-1 right-0 text-2xl text-rose-600"
            onClick={(e) => {
              e.stopPropagation();
              clearDate();
            }}
          >
            &times;
          </div> */}
        </>
      ) : (
        <BsCalendarEvent className="text-lg" />
      )}
    </div>
  </>
));

const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue() || {};
  const { updateData } = table.options.meta;
  return (
    <>
      <DatePicker
        wrapperClassName="date-picker"
        dateFormat="d MMM yyyy"
        selected={date}
        onChange={(date) => updateData(row.index, column.id, date)}
        customInput={
          <DateCustomInput
            clearDate={() => {
              console.log("clearDate");
              updateData(row.index, column.id, null);
            }}
          />
        }
      />
    </>
  );
};

export default DateCell;
