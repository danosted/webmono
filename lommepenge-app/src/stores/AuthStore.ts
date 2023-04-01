import { MongoClient } from 'mongodb';
import GetMongoClient from '../../lib/mongodb';
import { create } from 'zustand'

interface MongoUser {
    clientService: Promise<MongoClient>;
    userName: string;
}
interface MongoUserState {
    users: Array<MongoUser>;
    addMongoUser: (username: string, password: string) => void;
    getMongoUser: (username: string) => MongoUser | undefined;
}

const useMongoUserStore = create<MongoUserState>((set, get) => ({
    users: [],
    addMongoUser: (username: string, password: string) => set((state) => {
        const indexOf = state.users.findIndex(u => u.userName == username);
        if (indexOf === -1) {
            const clientPromise = GetMongoClient(username, password);
            const newUser: MongoUser = { clientService: clientPromise, userName: username };
            state.users.push(newUser);   
        }
        return state;
    }),
    getMongoUser: (username: string) => {
        return get().users.find(u => u.userName == username);
    }
}));
export default useMongoUserStore;