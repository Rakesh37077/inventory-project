import { useState } from "react";
import TABLEDATA from "../../data/TABLEDATA";
import EditableCell from "./EditableCell";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";
import { BiSort } from "react-icons/bi";
// import { FaSortUp } from "react-icons/fa";
// import { FaSortDown } from "react-icons/fa6";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import AddRowModal from "./AddRowModal";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Filters from "./Filters";
import { MdFavorite } from "react-icons/md";
import FavoriteSidebar from "./FavoriteSidebar";

const columns = [
  {
    accessorKey: "selectAllRow",
    header: "Row",
    cell: (props) => <p className="text-center">{props.getValue()}</p>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: DateCell,
  },
  {
    accessorKey: "taskName",
    header: "Task Name",
    cell: EditableCell,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
    enableSorting: false,
  },
  {
    accessorKey: "developedBy",
    header: "Developed By",
    cell: EditableCell,
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
    cell: EditableCell,
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: EditableCell,
  },
];

const ReactTable = () => {
  const [data, setData] = useState(TABLEDATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const [isaddRowModalOpen, setIsAddRowModalOpen] = useState(false);
  const [isFavoriteSidebarOpen, setIsFavoriteSidebarOpen] = useState(false);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      //   pagination: {
      //     pageSize: 5,
      //     pageIndex: 0,
      //   },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
  const AddRowModalHandler = () => {
    setIsAddRowModalOpen(true);
    console.log("AddRowModalHandler");
  };
  const CloseAddRowModalHandler = () => {
    setIsAddRowModalOpen(false);
  };
  const favoriteModalHandler = () => {
    setIsFavoriteSidebarOpen(true);
  };
  const CloseFavoriteModalHandler = () => {
    setIsFavoriteSidebarOpen(false);
  };
  // console.log(table.getHeaderGroups());
  //   console.log("columnFilters", columnFilters);
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-4 overflow-y-auto">
        <div className="flex items-start justify-between">
          <h1 className="text-2xl mb-8 pb-3 text-cyan-200 font-medium border-b border-cyan-300 inline-block">
            Daily Report
          </h1>
          <button
            className="flex items-center text-sky-200 font-bold text-xl mr-9 hover:text-sky-400"
            onClick={favoriteModalHandler()}
          >
            <MdFavorite className="mr-2" />
            <span>favorite</span>
          </button>
          {isFavoriteSidebarOpen && (
            <FavoriteSidebar closeFavorite={CloseFavoriteModalHandler} />
          )}
        </div>
        <div className="table" style={{ width: table.getTotalSize() }}>
          <div className="flex align-center mb-4 justify-between">
            <Filters
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
            />
            <button
              className="text-base leading-2 h-12 ml-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-0 px-6"
              onClick={() => AddRowModalHandler()}
            >
              + Add Row
            </button>
            {isaddRowModalOpen && (
              <AddRowModal CloseAddRowModalHandler={CloseAddRowModalHandler} />
            )}
          </div>
          {table.getHeaderGroups().map((headerGroup) => (
            <div className="tr" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <div
                  className="th"
                  key={header.id}
                  style={{ width: header.getSize() }}
                >
                  {header.column.columnDef.header}
                  {header.column.getCanSort() && (
                    <BiSort
                      className="text-base ml-1"
                      onClick={header.column.getToggleSortingHandler()}
                    />
                  )}
                  {
                    {
                      asc: "⬆️",
                      desc: "⬇️",
                    }[header.column.getIsSorted()]
                  }
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
        <div className="mt-3 text-white">
          Page
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex shadow-sm rounded-md mb-5 mt-3" role="group">
          <button
            type="button"
            className="rounded-l-lg text-sm bg-slate-600 border-slate-600 font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <BiSolidChevronLeft className="text-base text-white" />
          </button>
          <button
            type="button"
            className="rounded-r-md text-sm bg-slate-600 border-slate-600 font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <BiSolidChevronRight className="text-base text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactTable;
