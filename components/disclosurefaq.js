import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { faq_questions } from "../utils/constants";
import styles from "./style";

const DisclosureFaq = () => {
  return (
    <div className="w-full mx-auto">
      <div className="mx-auto w-full lg:w-7/12 bg-secondary rounded-md p-2">
        {faq_questions.map((question, index) => (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex w-full justify-between items-center rounded-md ${open && "bg-[#011B6B] ring-2 ring-white"} px-4 py-4 text-left text-sm font-medium text-white hover:bg-[#011B6B] focus:outline-none focus-visible:ring focus-visible:ring-white text-base`}>
                    <span>{question.question}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className={`px-4 pt-4 pb-4 text-sm text-slate-100 rounded-md text-base`}>
                    {question.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

          </div>
        ))}
      </div>
    </div>
  )
}

export default DisclosureFaq;
