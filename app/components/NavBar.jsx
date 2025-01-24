import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser()

  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4">
      <h2 className="text-xl font-bold font-serif"><Link href={"/"}>Next Blogs</Link></h2>
      <ul className="flex gap-6">
        <li className="text-sm py-1 px-2 rounded-md hover:bg-blue-400 hover:text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-sm py-1 px-2 rounded-md hover:bg-blue-400 hover:text-white">
          <Link href="/profile">Profile</Link>
        </li>
        {user ? (
          <li className="text-sm py-1 px-2 rounded-md hover:bg-blue-400 hover:text-white">
            <Link prefetch={false} href="/api/auth/logout">Logout</Link>
          </li>
        ) : (
          <>
            <li className="text-sm py-1 px-2 rounded-md hover:bg-blue-400 hover:text-white">
              <Link href="/api/auth/login">Login</Link>
            </li>
          </>
        )}
      </ul>
      <div>
        {user?.picture && (
          <Image
            src={user.picture}
            alt="User Picture"
            width={36}  // Specify the width of the image
            height={36} // Specify the height of the image
            className="rounded-full"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
