import { Layout } from "antd";
const { Content } = Layout;
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
