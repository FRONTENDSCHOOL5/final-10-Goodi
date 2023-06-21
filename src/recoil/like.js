import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const likedState = atom({
  key: 'likedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
