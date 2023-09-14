import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { docType } from "../utils/constants";
import { Tab } from '@headlessui/react';


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
            <div className="w-full">
              {docType.map((typeItem) => (
                <Menu.Item key={typeItem.id}>
                  {({ active }) => (
                    <button
                      onClick={() => setType(typeItem.title)}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } ${
                        type === typeItem.title ? "bg-gray-200" : ""
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
        <Tab.Panels className="mt-10 mx-auto bg-white rounded-md px-5">
            <Tab.Panel
              key={`${selectedDoc.id}panel`}
              className={classNames(
                'rounded-md w-full md:w-1/2 py-5 text-center mx-auto',
              )}
            >
                <h2 className="px-2 text-black font-bold leading-5">
                    {selectedDoc.description}
                </h2>
                <ul className='text-black py-5'>
                    {selectedDoc.benefits.map((benefit) => (
                        <li className='py-2' key={benefit[0]}><span role="img" aria-label="validate" className='px-2'>✅</span>{benefit[1]}</li>
                    ))}
                </ul>
                <p className='py-5 text-black'><span role="img" aria-label="validate" className='px-2'>⏲️</span>Temps de génération ≈ {selectedDoc.generation_time}</p>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default DropDownDoc;
