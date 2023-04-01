"use client"
import { MongoClient } from 'mongodb';
import GetMongoClient from '../../lib/mongodb';
import { create } from 'zustand'

interface MongoUserState {
    clientService?: Promise<MongoClient>;
    loginMongo: (username: string, password: string) => void;
}

const useMongoUserStore = create<MongoUserState>((set, get) => ({
    clientService: undefined,
    userName: undefined,
    loginMongo: (username: string, password: string) => set((state) => {
        const clientPromise = GetMongoClient(username, password);
        state.clientService = clientPromise;
        return state;
    })
}));
export default useMongoUserStore;