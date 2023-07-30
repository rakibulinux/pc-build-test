import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";

const LoginPage = () => {
  return (
    <div className="dark:bg-gray-800 py-4">
      <Head>
        <title>PC Builder Login</title>
      </Head>
      <div
        className={styles.form}
        style={{
          alignItems: "center",
        }}
      >
        <h3>Login</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: `http://localhost:3000`,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
