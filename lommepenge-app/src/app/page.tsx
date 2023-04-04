import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  return (
    <div className='flex flex-col justify-center items-center min-h-full'>
      <span>
        Hello, what to do?
      </span>
    </div>
  )
}
