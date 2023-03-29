import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import clientPromise from '../../lib/mongodb'

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
  const client = await clientPromise;
  const db = client.db("MoneyHandler");
  const isConnected = db !== undefined;
  const myClassName = isConnected ? "text-green-500" : "text-orange-400"
  return (
    <main className='text-3xl font-bold underline'>
      <div className={myClassName}>
        {isConnected ? "Connected!" : "Not connected :(" }
      </div>
    </main>
  )
}
