import { LuUser } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
async function UserIcon() {
  const user = await currentUser();
  const profileImg = user?.imageUrl;

  if (profileImg) {
    return (
      <img src={profileImg} className="w-6 h-6 ronded full object-cover" />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
