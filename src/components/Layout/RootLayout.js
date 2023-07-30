import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
  return (
    <Layout>
      {/* <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC Builder
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/news">
            <items>
              <ProfileOutlined />
              All News
            </items>
          </Link>
          <Link href="/create">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <ProfileOutlined />
              Add News
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
        </Menu>
      </Header> */}
      <Navbar />
      <Content
        style={{
          padding: "0",
          //   minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <Footer />
      {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          <div className={styles.line}></div>
          <h2
            style={{
              fontSize: "28px",
            }}
          >
            PH-NEWS PORTAL
          </h2>
          <p className={styles.social_icons}>
            <Link href="https://web.facebook.com/groups/programmingherocommunity">
              <FacebookFilled />
            </Link>
            <Link href="www.twitter.com">
              <TwitterSquareFilled />
            </Link>
            <Link href="https://web.programming-hero.com/home/">
              <GoogleSquareFilled />
            </Link>
            <Link href="www.linkedin.com">
              <LinkedinFilled />
            </Link>
          </p>
          News Portal ©2023 Created by Programming Hero
        </Footer> */}
    </Layout>
  );
};
export default RootLayout;
