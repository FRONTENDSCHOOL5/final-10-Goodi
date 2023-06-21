import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

const recentSearch = atom({
    key: "recentSearch",
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export { recentSearch };