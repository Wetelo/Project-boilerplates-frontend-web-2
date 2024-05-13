export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  avatarFileId: number | null | undefined;
};
