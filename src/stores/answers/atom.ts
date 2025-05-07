import { atom } from 'jotai';

export const answersState = atom<(string | number[])[]>([]);
export const answersAtom = atom((get) => get(answersState));
