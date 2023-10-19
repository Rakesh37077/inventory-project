import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { STATUSES } from "../../data/TABLEDATA";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ColorIcon = ({ className, ...props }) => (
  <div
    className={`block mr-2 h-3 w-3 rounded-sm ${className}`}
    {...props}
  ></div>
);

const StatusCell = ({ getValue, row, column, table }) => {
  const { name, className } = getValue() || {};
  const { updateData } = table.options.meta;

  return (
    <>
      <Menu as="div" className="relative inline-block text-left w-full h-full">
        <div>
          <Menu.Button
            className={`inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-black-200 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50 ${
              className || "bg-transparent"
            }`}
          >
            {name || "Options"}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-black-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-left bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center px-4 py-2 text-sm text-white hover:text-black"
                    )}
                    onClick={() => updateData(row.index, column.id, null)}
                  >
                    <ColorIcon className="bg-blue-400" />
                    None
                  </a>
                )}
              </Menu.Item>
              {STATUSES.map((status) => (
                <Menu.Item key={status.id}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "flex items-center px-4 py-2 text-sm text-white hover:text-black"
                      )}
                      onClick={() => updateData(row.index, column.id, status)}
                    >
                      <ColorIcon className={status.className} />
                      {status.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default StatusCell;
