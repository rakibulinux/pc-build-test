import { Layout, Menu, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
const { Header } = Layout;
import Link from "next/link";
import DropdownMenu from "./Dropdown";

const Navbar = () => {
  const { data: session } = useSession();

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
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link
          className="hidden md:block"
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
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
        {session?.user ? (
          <li className="hidden md:block">
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
