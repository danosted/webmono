import { MongoClient, MongoClientOptions } from 'mongodb'

const GetMongoClient = (userName : string, password: string, options?: MongoClientOptions) : Promise<MongoClient> => {
  // if (!process.env.MONGODB_URI) {
  //   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  // }

  if (!process.env.MONGODB_ENDPOINT) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }

  if(!userName){
    throw new Error('Invalid/Missing userName')
  }

  if(!password){
    throw new Error('Invalid/Missing password')
  }
  
  const uri = `mongodb+srv://${userName}:${password}@${process.env.MONGODB_ENDPOINT}/?retryWrites=true&w=majority`

  // const uri = process.env.MONGODB_URI
  // const options = {}

  let client
  let clientPromise: Promise<MongoClient>

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
  return clientPromise;
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
// export default clientPromise
export default GetMongoClient