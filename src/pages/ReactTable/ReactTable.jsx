import { useState } from "react";
import TABLEDATA from "../../data/TABLEDATA";
import EditableCell from "./EditableCell";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "selectAllRow",
    header: "Select All Row",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
  },
  {
    accessorKey: "taskName",
    header: "Task Name",
    cell: EditableCell,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()?.name}</p>,
  },
  {
    accessorKey: "developedBy",
    header: "Developed By",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const ReactTable = () => {
  const [data, setData] = useState(TABLEDATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChnage",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });
  // console.log(table.getHeaderGroups());
  console.log("table rows", data);
  return (
    <div className="bg-slate-900 h-screen">
      <div className="container mx-auto px-4 py-4 overflow-y-auto">
        <h1 className="text-2xl mb-8 pb-3 text-cyan-200 font-medium border-b border-cyan-300 inline-block">
          Daily Report
        </h1>
        <div className="table" style={{ width: table.getTotalSize() }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <div className="tr" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <div
                  className="th"
                  key={header.id}
                  style={{ width: header.getSize() }}
                >
                  {header.column.columnDef.header}
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer ${
                      header.column.getIsResizing() ? "isResizing" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          ))}
          {table.getRowModel().rows.map((row) => (
            <div className="tr" key={row.id}>
              {row.getVisibleCells().map((tableCell) => (
                <div
                  className="td"
                  key={tableCell.id}
                  style={{ width: tableCell.column.getSize() }}
                >
                  {flexRender(
                    tableCell.column.columnDef.cell,
                    tableCell.getContext()
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactTable;
