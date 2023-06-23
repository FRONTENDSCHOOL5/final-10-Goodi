import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const checkDeletePost = atom({
    key: 'checkDeletePost',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const checkFollow = atom({
    key: 'checkFollow',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const checkProfile = atom({
    key: 'checkFollow',
    default: false,
    effects_UNSTABLE: [persistAtom],
});