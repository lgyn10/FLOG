import { atom, useRecoilValue } from 'recoil';
import { recoilPersist } from 'recoil-persist';
export type ObjectEx = {
  mealId: Number;
  type: String;
  quantity: String;
  selectedDate: String;
  userId: string;
};

type IdState = string | null;
type MemberIdState = string | null;
type ToogleState = string | null;
type JsonState = Array<ObjectEx> | null;
type LoginState = boolean | null;

const { persistAtom } = recoilPersist(); // 새로고침 했을 때, 데이터 유지

export const idState = atom<IdState>({
  key: 'idState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const memberIdState = atom<MemberIdState>({
  key: 'memberIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const toogleState = atom<ToogleState>({
  key: 'toogleState',
  default: 'TYPE',
  effects_UNSTABLE: [persistAtom],
});

export const jsonState = atom<JsonState>({
  key: 'jsonState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const loginState = atom<LoginState>({
  key: 'loginState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
