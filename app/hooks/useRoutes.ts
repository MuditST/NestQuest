import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsFillChatLeftFill,BsFillHousesFill } from "react-icons/bs";
import {  HiUsers } from 'react-icons/hi2';
import { RiLogoutBoxFill } from "react-icons/ri";

import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const router = useRouter();

  const routes = useMemo(() => [
    {
      label: 'Explore', 
      onClick: () => {router.push("/explore")},
      href: '#',
      icon: BsFillHousesFill, 
    },
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: BsFillChatLeftFill,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: RiLogoutBoxFill, 
    }
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;
