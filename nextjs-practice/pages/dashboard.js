import { useSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>
      {status === "authenticated" ? (
        "Hello"
      ) : (
        <p onClick={() => signIn()}>Login</p>
      )}
    </div>
  );
};

export default Dashboard;
