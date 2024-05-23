export type StaticPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  noIndex: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
};
