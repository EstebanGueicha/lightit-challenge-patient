export interface Patient {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
}

export enum ToastType {
  SUCCESS = 'successToast',
  ERROR = 'errorToast',
}
