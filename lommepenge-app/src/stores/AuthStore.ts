"use client"
import { truncate } from 'fs';
import { create } from 'zustand'

interface MongoUserState {
    isAuthenticated: boolean;
}
type MongoUserAction = {
    loginMongo: (username: string, password: string) => void;
}
const useMongoUserStore = create<MongoUserState & MongoUserAction>((set) => ({
    isAuthenticated: false,
    loginMongo: (username: string, password: string) => set(() => (password !== 'Test.1234!' ? { isAuthenticated: false } : { isAuthenticated: true }))
}));
export default useMongoUserStore;