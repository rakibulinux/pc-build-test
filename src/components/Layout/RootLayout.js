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
      <Navbar />
      <Content
        style={{
          padding: "0",
        }}
      >
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};
export default RootLayout;
