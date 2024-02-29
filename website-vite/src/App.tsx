import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { useTimeoutFn } from 'react-use'
import { ArrowPathRoundedSquareIcon, CubeTransparentIcon } from '@heroicons/react/24/solid'

function App() {
  const [isShowing, setIsShowing] = useState(true)
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

  return (
    <>
      <div className='min-h-screen px-8 py-16 bg-black'>
        <div className='grid gap-8 items-center justify-center'>
          <div className="h-32 w-32 mx-auto">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <CubeTransparentIcon className='h-full w-full rounded-md text-indigo-400 shadow-lg' />
            </Transition>
          </div>
          <div className='relative group'>
            <div className='absolute -inset-0.5 blur opacity-75 rounded-lg bg-gradient-to-r from-teal-400 to-indigo-600 animate-pulse group-active:-inset-1'></div>
            <button
              onClick={() => {
                setIsShowing(false)
                resetIsShowing()
              }}
              className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 group-active:bg-gray-900"
            >
              <ArrowPathRoundedSquareIcon className="text-teal-400 w-10 h-10 pr-3" />

              <span className="pl-3 text-indigo-600">Click to transition</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
