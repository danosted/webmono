import RequireAuthentication from '@/components/RequireAuthentication';
import LoginForm from '@/components/useLogin';
import { Inter } from 'next/font/google'
import getDb from './database'

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
  const myDb = await getDb("MoneyHandler");
  return (
    <RequireAuthentication>
      <div className='flex justify-center items-center min-h-full'>
        Hello!
      </div>
    </RequireAuthentication>

  )
}
