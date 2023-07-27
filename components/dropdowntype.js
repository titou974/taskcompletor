import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { persoType } from "../utils/constants";

const DropDownType = ({ type, setType }) => {
  return (
    <Menu as="div" className="relative block text-left w-full text-[16px]">
      <div>
        <Menu.Button className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
          {type}
          <ChevronUpIcon
            className="-mr-1 ml-2 h-5 w-5 ui-open:hidden"
            aria-hidden="true"
          />
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 hidden ui-open:block"
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {persoType.map((typeItem) => (
              <Menu.Item key={typeItem.id}>
                {({ active }) => (
                  <button
                    onClick={() => setType(typeItem.title)}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } ${
                      type === typeItem.title ? "bg-gray-200" : ""
                    } "px-4 py-2 w-full text-left flex items-center space-x-2 justify-between"`}
                  >
                    <span className="ps-3">{typeItem.title}</span>
                    {type === typeItem.title ? (
                      <CheckIcon className="w-4 h-4 text-bold" />
                    ) : null}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownType;