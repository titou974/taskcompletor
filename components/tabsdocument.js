import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { docType } from "../utils/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabsDocument = ({type, setType}) => {

  return (
    <div className="w-full py-16 sm:px-0 mx-auto">
      <Tab.Group vertical onChange={(index) => {
        setType(docType[index].title)
      }}>
        <Tab.List className="flex space-x-1 rounded-md bg-tertiary p-1">
          {docType.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-md py-2.5 text-sm font-medium leading-5 text-black',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {docType.map((type) => (
            <Tab.Panel
              key={type.id}
              className={classNames(
                'rounded-md bg-white p-5',
              )}
            >
                <h2 className="text-sm text-black font-bold leading-5">
                    {type.description}
                </h2>
                <ul className='text-black text-sm mt-5'>
                    {type.benefits.map((benefit) => (
                        <li><span role="img" aria-label="validate" className='px-5'>✅</span><p>{benefit}</p></li>
                    ))}
                </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
};

export default TabsDocument;