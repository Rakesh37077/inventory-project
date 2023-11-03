import React from "react";
import carReport from "./../../data/carReport.json";

const columns = [
  {
    accessorKey: "brand",
    header: "Brand",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "image",
    header: "Image",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "model",
    header: "Car Model",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "carBody",
    header: "Car Body",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "color",
    header: "Color",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "price",
    header: "Price",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "year",
    header: "Year",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 120,
    cell: (props) => <>props</>,
  },
  {
    accessorKey: "favorites",
    header: "Favorites",
    size: 120,
    cell: (props) => <>props</>,
  },
];

const CarReports = () => {
  console.log("carReports", carReport);
  return <div className="bg-slate-900 min-h-screen"></div>;
};

export default CarReports;
