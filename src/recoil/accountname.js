import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const accountname = atom({
  key: 'accountname',
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export default accountname;