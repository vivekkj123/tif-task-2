import type { NextPage } from "next";
import HomeLayout from "@containers/home/HomeLayout";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <HomeLayout />
    </Layout>
  );
};

export default Home;
