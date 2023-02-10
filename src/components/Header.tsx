import Link from 'next/link';
import logoLight from '../../public/assets/logo_light.png';
import logoDark from '../../public/assets/logo_dark.png';
import Image from 'next/image';
import {
  BsTelegram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const navigationLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/+QazM4E1vaUM3NDQ0',
    icon: BsTelegram,
    current: false,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/theLITCommunity',
    icon: BsTwitter,
    current: false,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/latina-in-tech',
    icon: BsLinkedin,
    current: false,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/LatinaInTech/',
    icon: BsFacebook,
    current: false,
  },
  {
    name: 'Github',
    href: 'https://github.com/latina-in-tech',
    icon: BsGithub,
    current: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC = () => {
  return (
    <Disclosure as='nav'>
      {({ open: isOpen }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-800'>
                  <span className='sr-only'>Apri menu</span>
                  {isOpen ? (
                    <XMarkIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    ></XMarkIcon>
                  ) : (
                    <Bars3Icon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    ></Bars3Icon>
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex w-full flex-1 items-center justify-center lg:items-stretch lg:justify-between'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <Image
                      src={logoLight}
                      alt='Logo LiT'
                      height={60}
                      width={250}
                      title='Home'
                      className='dark:drop-shadow-xl dark:hidden'
                    />
                    <Image
                      src={logoDark}
                      alt='Logo LiT'
                      height={60}
                      width={250}
                      title='Home'
                      className='dark:drop-shadow-xl hidden dark:block'
                    />
                  </Link>
                </div>
                <div className='hidden items-center sm:ml-6 lg:flex'>
                  <div className='flex space-x-4'>
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target='_blank'
                        className={classNames(
                          item.current
                            ? 'bg-slate-700 text-white dark:bg-black dark:bg-opacity-4 dark:text-slate-300'
                            : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20',
                          'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.icon && <item.icon></item.icon>}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigationLinks.map((item) => (
                <Disclosure.Button
                  as={Link}
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <span
                    className={classNames(
                      item.current
                        ? 'bg-slate-700 text-white dark:bg-black dark:bg-opacity-40 dark:text-slate-300'
                        : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20',
                      'flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.icon && <item.icon></item.icon>}
                    {item.name}
                  </span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;