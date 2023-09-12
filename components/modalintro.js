import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalIntro = ({isOpen, closeModal, generateDoc}) => {
  return(
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20 hidden md:block" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg md:text-[20px] sm:text-[26px] xs:text-[20px] text-[20px] leading-6 text-gray-900 pb-2 titlemodal"
                >
                  Détaillez le sujet de votre document.
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Plus vous serez précis dans vos indications, plus l'IA générera un résultat pertinent.
                  </p>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    className="mr-5 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Compris 😊
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-200 hover:bg-orange-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={generateDoc}
                  >
                    Générer quand même 🤭
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalIntro;
