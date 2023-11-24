"use client"
import { PropsWithChildren, createContext } from 'react';
import { MongoClient } from "mongodb";

type MongoClientServiceProviderProps = {
  clientService: Promise<MongoClient>;
}

export const MongoClientServiceContext = createContext<Promise<MongoClient> | undefined>(undefined);

function MongoClientServiceProvider({ clientService, children }: PropsWithChildren<MongoClientServiceProviderProps>) {
  return <MongoClientServiceContext.Provider value={clientService}>
    {children}
  </MongoClientServiceContext.Provider>

}

export default MongoClientServiceProvider;