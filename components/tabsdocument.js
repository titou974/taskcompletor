import { Tab } from '@headlessui/react'
import { docType } from "../utils/constants";
import { ClockIcon } from '@heroicons/react/20/solid';
import MessageTemplate from './messagetemplate';
import MailTemplate from './mailtemplate';
import ReportExample from './reportexample';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabsDocument = ({type, setType}) => {

  return (
    <div className="w-full mx-auto">
      <Tab.Group vertical onChange={(index) => {
        setType(docType[index].title)
      }}>
        <Tab.List className="flex space-x-1 rounded-md bg-secondary p-1 shadow-md">
          <Tab
            key={`${docType[0].id}tab`}
            className={({ selected }) =>
              classNames(
                'w-full rounded-md py-2.5 font-medium leading-5 text-white',
                'ring-white ring-opacity-100 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-[#011B6B] shadow'
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
                  ? 'bg-[#011B6B] shadow'
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
                  ? 'bg-[#011B6B] shadow'
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
                  ? 'bg-[#011B6B] shadow'
                  : 'text-white hover:bg-white/[0.12] transition-colors'
              )
            }
          >
            <p>{docType[3].title}<span role="img" aria-label="lettre de motivation" className='px-2'>🎙️</span></p>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-10 mx-auto bg-secondary rounded-md shadow-xl text-white">
          {docType.map((type) => (
            <Tab.Panel
              key={`${type.id}tabpanel`}
              className={classNames(
                'rounded-md w-[90%] md:w-8/12 py-5 mx-auto text-center',
              )}
            >
                <h2 className="italic leading-5">
                    {type.description}
                </h2>
                <div className='flex py-5 text-center justify-center'>
                  <ClockIcon className='w-6 h-6 text-white me-2' />
                  <p className='italic'>≈ {type.generation_time}</p>
                </div>
                <div className={`${type.title === "Rapport" ? "" : "hidden" } py-10`}>
                  <p className='font-bold'>Exemple de Rapport généré en PDF</p>
                  <div className='flex flex-col items-center'>
                    <ul className='py-5 italic text-sm'>
                      <li className='py-2 px-10 my-2 bg-[#011B6B] rounded-full'>Language: formel</li>
                      <li className='py-2 px-4 my-2 bg-[#011B6B] rounded-full'>Sujet: "le musée de l'art et de l'espace"</li>
                    </ul>
                  </div>
                  <div className='w-full'>
                    <ReportExample  generatedTitle={type.example.title} generatedSections={type.example.sections} length={6} />
                  </div>
                </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
};

export default TabsDocument;
