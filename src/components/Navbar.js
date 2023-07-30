import auth from "@/firebase/firebase.auth";
import { Layout, Menu, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
const { Header } = Layout;
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import DropdownMenu from "./Dropdown";

const Navbar = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          PC Builder
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <li>Profile</li>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/pc-builder"
        >
          <Button type="primary">PC Builder</Button>
        </Link>
        <DropdownMenu />
        {session?.user || user?.email ? (
          <li>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </li>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <li>Login</li>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
