import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { docType } from "../../utils/constants";
import { Tab } from '@headlessui/react';
import { ClockIcon } from "@heroicons/react/20/solid";
import ReportExample from "../doctemplates/carouseltemplates/reportexample";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const DropDownDoc = ({ type, setType }) => {
  const [selectedDoc, setSelectedDoc] = useState((docType.find(item => item.title === type)))
  const findDocTypeByTitle = () => {
    setSelectedDoc(docType.find(item => item.title === type));
  };

  useEffect(() => {
    findDocTypeByTitle();
  })

  return (
    <>
      <Menu as="div" className="relative block text-left w-full text-md">
        <div>
          <Menu.Button className="inline-flex w-full justify-between items-center rounded-md border-2 border-white bg-[#011B6B] px-4 py-2 text-white shadow-sm hover:bg-white/[0.12] hover:text-slate-300 hover:border-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white transition-all">
            {type}
            <ChevronUpIcon
              className="-mr-1 ml-2 h-5 w-5 hidden ui-open:block"
              aria-hidden="true"
            />
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 ui-open:hidden"
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
          <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-secondary shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
            <div className="w-full">
              {docType.map((typeItem) => (
                <Menu.Item key={typeItem.id}>
                  {({ active }) => (
                    <button
                      onClick={() => setType(typeItem.title)}
                      className={`${
                        active ? "text-white bg-white/[0.12] shadow-sm" : "text-slate-300"
                      } ${
                        type === typeItem.title ? "bg-[#011B6B]" : ""
                      } " ps-3 py-2 w-full text-left flex items-center space-x-2 justify-between"`}
                    >
                      <span>{typeItem.title}</span>
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
      <Tab.Group vertical onChange={(index) => {
        setType(docType[index].title)
      }}>
        <Tab.Panels className="mt-10 mx-auto bg-secondary rounded-md px-2 shadow-xl text-white text-sm">
            <Tab.Panel
              key={`${selectedDoc.id}panel`}
              className={classNames(
                'rounded-md py-5 text-center mx-auto w-[90%]',
              )}
            >
                <h2 className="italic leading-5 mx-auto">
                    {selectedDoc.description}
                </h2>
                <div className='flex py-5 text-center justify-center'>
                  <ClockIcon className='w-6 h-6 text-white me-2' />
                  <p className='italic'>≈ {selectedDoc.generation_time}</p>
                </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default DropDownDoc;
