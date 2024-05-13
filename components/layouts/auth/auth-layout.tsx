import logo from '@/public/wetelo.svg';
import backgroundImage from './background.jpg';
import { FC, PropsWithChildren } from 'react';
import { Picture } from '../../ui-kit/picture';
import { Home } from '@/utils/routes';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative grid min-h-svh items-center md:grid-cols-2">
      <div className="relative flex h-full items-center justify-center px-5 py-24">
        <div className="absolute -z-10 size-full">
          <Picture src={backgroundImage} role="presentation" fill loading="eager" />
        </div>
        <div className="flex flex-col items-center">
          <Home.Link>
            <Picture className="mb-4 !w-40 md:mb-10 md:!w-96" src={logo} height={1038} width={746} alt="Logo" />
          </Home.Link>
          <p className="mb-5 text-center text-xl font-normal leading-9 text-white md:text-3xl">
            Software Product <br /> Development Company
          </p>
        </div>
      </div>
      <div className="px-5 py-14">{children}</div>
    </div>
  );
};

export { AuthLayout };
