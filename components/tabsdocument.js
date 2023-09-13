import { Tab } from '@headlessui/react'
import { docType } from "../utils/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabsDocument = ({type, setType}) => {

  return (
    <div className="w-full sm:px-0 mx-auto">
      <Tab.Group vertical onChange={(index) => {
        setType(docType[index].title)
      }}>
        <Tab.List className="flex space-x-1 rounded-md bg-[#0256c2] p-1">
          <Tab
            key={`${docType[0].id}tab`}
            className={({ selected }) =>
              classNames(
                'w-full rounded-md py-2.5 font-medium leading-5 text-white',
                'ring-white ring-opacity-100 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-tertiary shadow'
                  : 'text-white hover:bg-white/[0.12] transition-colors'
              )
            }
          >
            <p>{docType[0].title}<span role="img" aria-label="rapport" className='px-2'>📋</span></p>
          </Tab>
          <Tab
            key={`${docType[1].id}tab`}
            className={({ selected }) =>
              classNames(
                'w-full rounded-md py-2.5 font-medium leading-5 text-white',
                'ring-white ring-opacity-100 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-tertiary shadow'
                  : 'text-white hover:bg-white/[0.12] transition-colors'
              )
            }
          >
            <p>{docType[1].title}<span role="img" aria-label="message" className='px-2'>💬</span></p>
          </Tab>
          <Tab
            key={`${docType[2].id}tab`}
            className={({ selected }) =>
              classNames(
                'w-full rounded-md py-2.5 font-medium leading-5 text-white',
                'ring-white ring-opacity-100 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-tertiary shadow'
                  : 'text-white hover:bg-white/[0.12] transition-colors'
              )
            }
          >
            <p>{docType[2].title}<span role="img" aria-label="email" className='px-2'>📧</span></p>
          </Tab>
          <Tab
            key={`${docType[3].id}tab`}
            className={({ selected }) =>
              classNames(
                'w-full rounded-md py-2.5 font-medium leading-5 text-white',
                'ring-white ring-opacity-100 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-tertiary shadow'
                  : 'text-white hover:bg-white/[0.12] transition-colors'
              )
            }
          >
            <p>{docType[3].title}<span role="img" aria-label="email" className='px-2'>🎙️</span></p>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-10 mx-auto bg-white rounded-md text-sm">
          {docType.map((type) => (
            <Tab.Panel
              key={`${type.id}tabpanel`}
              className={classNames(
                'rounded-md w-full md:w-1/2 py-5 text-center mx-auto',
              )}
            >
                <h2 className="px-2 text-black font-bold leading-5">
                    {type.description}
                </h2>
                <ul className='text-black py-5'>
                    {type.benefits.map((benefit) => (
                        <li className='py-2' key={`${type.id}li`}><span role="img" aria-label="validate" className='px-2'>✅</span>{benefit}</li>
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