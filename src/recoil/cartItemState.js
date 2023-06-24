import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 장바구니 상품 목록
export const cartItemsState = atom({
  key: 'cartItemState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
