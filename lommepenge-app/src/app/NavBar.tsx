"use client"
import useMongoUserStore from '@/stores/AuthStore';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/navigation_links';

const NavBar = () => {
  const isAuthenticated = useMongoUserStore((state) => state.isAuthenticated)

  return (
    <nav>
      <ul className="flex items-center justify-center bg-rose-900 text-red-200 gap-x-8 h-8 sticky top-0 left-0 w-full">
        {
          // isAuthenticated &&
          <>
            <li>
              <Link href={NAVIGATION_LINKS.USERS}>Users</Link>
            </li>
            <li>
              <Link href={NAVIGATION_LINKS.COLLECTIONS}>Collections</Link>
            </li>
            <li>
              <Link href={NAVIGATION_LINKS.MONIES}>Monies</Link>
            </li>
          </>
        }
      </ul>
    </nav>
  )
}

export default NavBar;
