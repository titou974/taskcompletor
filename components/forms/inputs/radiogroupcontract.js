import { RadioGroup } from '@headlessui/react';
import { contractNameList } from '../../../utils/constants/index';


const RadioGroupContracts = ({contractName, setContractName}) => {

  return (
    <div className="w-full pt-10">
      <div className="mx-auto w-full">
        <RadioGroup value={contractName} onChange={(e) => setContractName(e)}>
          <RadioGroup.Label className="sr-only">Graduate?</RadioGroup.Label>
          <div className="space-y-2">
            {contractNameList.map((name) => (
              <RadioGroup.Option
                key={name.id}
                value={name.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-100'
                      : ''
                  }
                  ${
                    checked ? 'bg-tertiary bg-opacity-75 text-white' : 'bg-[#0256c2] hover:bg-white/[0.12] transition-colors'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-6 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {name.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-slate-400'
                            }`}
                          >
                            <span>
                              {name.description}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

const CheckIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default RadioGroupContracts;
