import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const logoutCheck = atom({
  key: 'logoutCheck',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default logoutCheck ;

// 노필요