import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import GetMongoClient from '../../lib/mongodb'
import LoginForm from '@/hooks/useLogin'
import useMongoUserStore from '@/stores/AuthStore'

const inter = Inter({ subsets: ['latin'] })

// type DbConnectType = {
//   isConnected: boolean;
// }

// const getDbData: DbConnectType = async () => {
//   try {
//     console.log("hello")
//     // await clientPromise
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands`


//     return {
//       isConnected: true 
//     }
//   } catch (e: unknown) {
//     console.log(e)
//     return {
//       isConnected: false
//     }
//   }
// }

export default async function Home() {
  const clientService = useMongoUserStore((state) => state.clientService);
  const client = await clientService;
  const db = client?.db("MoneyHandler");
  db?.createCollection
  const isConnected = db !== undefined;
  return (
    <div className='flex justify-center items-center min-h-full'>
      Hello!
    </div>
  )
}
