import { atom } from "nanostores";

export interface UserInfo {
  id: string | null;
  email: string | null;
  name: string | null;
  avatar: string | null;
}

export const $userInfo = atom<UserInfo>({
  id: null,
  email: null,
  name: null,
  avatar: null,
});
