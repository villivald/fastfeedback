import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

const Dashboard = () => {
  const auth = useAuth();

  return auth.user ? <EmptyState /> : "Loading...";
};

export default Dashboard;
