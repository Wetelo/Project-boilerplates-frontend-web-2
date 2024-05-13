import { FC, PropsWithChildren } from 'react';
import { Header } from './header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative min-h-svh">
      <Header />
      <main>{children}</main>
    </div>
  );
};
