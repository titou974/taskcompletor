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
        <Tab.List className="flex space-x-1 rounded-md bg-[#0256c2] p-1">
          {docType.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-md py-2.5 text-sm font-medium leading-5 text-black',
                  'ring-black ring-opacity-60 focus:outline-none focus:ring-2',
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
        <Tab.Panels className="mt-10 mx-auto">
          {docType.map((type) => (
            <Tab.Panel
              key={type.id}
              className={classNames(
                'rounded-md bg-white p-5 text-center',
              )}
            >
                <h2 className="px-2 text-black font-bold leading-5">
                    {type.description}
                </h2>
                <ul className='text-black py-5'>
                    {type.benefits.map((benefit) => (
                        <li className='py-2'><span role="img" aria-label="validate" className='px-2'>✅</span>{benefit}</li>
                    ))}
                </ul>
                <p className='py-5 text-black'><span role="img" aria-label="validate" className='px-2'>⏲️</span>Temps de génération ≈ {type.generation_time}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
};

export default TabsDocument;