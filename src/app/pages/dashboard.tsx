import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  return <h1>Welcome, {session.user?.name}!</h1>;
}
