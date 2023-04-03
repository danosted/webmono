"use client"
import { create } from 'zustand'

interface MongoUserState {
    isAuthenticated: boolean;
    loginMongo: (username: string, password: string) => void;
}

const useMongoUserStore = create<MongoUserState>((set, get) => ({
    isAuthenticated: false,
    loginMongo: (username: string, password: string) => set((state) => {
        if(password !== 'Test.1234!') {
            state.isAuthenticated = false;
        }
        else{
            state.isAuthenticated = true;
        }
        return state;
    })
}));
export default useMongoUserStore;