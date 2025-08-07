import { createWithEqualityFn } from 'zustand/traditional';

export interface IUser {
    user?: string;
    room?: string;
}
export const useUserStore = createWithEqualityFn<IUser & {
    setUser: (user: string) => void;
    setRoom: (val: string) => void;
}>(
    set => ({
        user: '',
        room: '',
        setRoom: (newRoom: string) => { set({ room: newRoom }) },
        setUser: (newUser: string) => { set({ user: newUser }) }
    }),
    Object.is
);
