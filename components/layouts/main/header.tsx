import { Picture } from '@/components/ui-kit/picture';
import logo from '@/public/wetelo.svg';
import { Home } from '@/utils/routes';

export const Header = () => {
  return (
    <header className="sticky top-0 flex min-h-14 items-center bg-gray-300">
      <div className="container">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <Home.Link>
              <Picture className="w-28 md:w-32" src={logo} height={1038} width={746} alt="Logo" />
            </Home.Link>
          </div>
        </div>
      </div>
    </header>
  );
};
