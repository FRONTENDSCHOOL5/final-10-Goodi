import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const loginToken = atom({
  key: 'loginToken',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default loginToken;