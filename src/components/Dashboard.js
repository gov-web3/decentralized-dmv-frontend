import { useContext } from "react";
import LoginContext from "./LoginContext";

const Dashboard = () => {
  const [loginContext, setLoginContext] = useContext(LoginContext);
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block p-6">Welcome to the dashboard!</h1>
        <h2 className="block p-6">
          Authentication Status: {JSON.stringify(loginContext.authenticated)}
        </h2>
        <button onClick={(e) => setLoginContext({ authenticated: true })}>
          True
        </button>
        <button onClick={(e) => setLoginContext({ authenticated: false })}>
          False
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
