import Head from "next/head";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Living</title>
        <meta
          name="description"
          content="The most comfortable home for future life"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Future Living" />
        <meta
          name="og:description"
          content="The most comfortable home for future life"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dstfzlnsw/image/upload/v1680240592/future-living/cover-image_xnkrox.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Navbar />
        </Layout>
        <Hero />
        <Section />
      </main>
    </>
  );
}
