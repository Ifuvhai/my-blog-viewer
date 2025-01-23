import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const {getUser} = getKindeServerSession();
      const user = await getUser()

      if (!user) {
        redirect('/api/auth/login');
      }
    return (
      <div>
        <h2 className="text-3xl font-semibold text-center my-6">Welcome {user?.given_name}</h2>
        
      </div>
    );
  }
  