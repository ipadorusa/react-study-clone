import { atom, useRecoilValue } from 'recoil';

const cartState = atom<Map<string, number>>({
  key: 'cartState',
  default: new Map(),
});

export const useCartItem = (id: string) => {
  const carts = useRecoilValue(cartState);
  return carts.get(id);
};
