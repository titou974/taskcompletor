import { Tab } from '@headlessui/react'
import { emotions } from "../../../utils/constants";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabsEmotion = ({emotion, setEmotion}) => {
    return (
        <div className="w-full sm:px-0 mx-auto">
            <Tab.Group vertical onChange={(index) => {
                setEmotion(emotions[index].id)
            }}>
            <Tab.List className="flex space-x-1 rounded-md bg-[#0256c2] p-1">
            <Tab
                key={emotions[0].id}
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
                <p>{emotions[0].title}<span role="img" aria-label="happy" className='px-2'>😂</span></p>
            </Tab>
            <Tab
                key={emotions[1].id}
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
                <p>{emotions[1].title}<span role="img" aria-label="sad" className='px-2'>😥</span></p>
            </Tab>
            <Tab
                key={emotions[2].id}
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
                <p>{emotions[2].title}<span role="img" aria-label="angry" className='px-2'>😡</span></p>
            </Tab>
            <Tab
                key={emotions[3].id}
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
                <p>{emotions[3].title}<span role="img" aria-label="thankful" className='px-2'>🙏</span></p>
            </Tab>
            <Tab
                key={emotions[4].id}
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
                <p>{emotions[4].title}<span role="img" aria-label="inquiétude" className='px-2'>😟</span></p>
            </Tab>
            </Tab.List>
            </Tab.Group>
        </div>
    )
}

export default TabsEmotion;
