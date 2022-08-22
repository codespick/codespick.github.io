import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myProps);
  const router = useRouter();
  const { slug } = router.query;
  const getAnswer = async () => {
    try {
      // router.reload()
      let mainData = await fetch(
        `${process.env.slug_Api}?slug=${slug}`,
        { method: "get" }
      );
      let fullDataInJson = await mainData.json();
      setBlog(fullDataInJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    getAnswer();
  }, [router.isReady, slug]);
  return (
    <>
      <div>
        {blog &&
          blog.map((v) => {
            return (
              <div key={v.slug}>
                <Head>
                  <title>{v.title} Tutorial | CodesPick</title>
                  <meta
                    name="description"
                    content="This is CodesPick. A Website to learn C Language"
                  />
                  {/* <meta name="robots" content="index, follow" /> */}
                  {/* <link rel="canonical" href="https://yourwebsite.com/" /> */}
                </Head>
                <h1>{v.title}</h1>
                <p>{v.desc}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let { slug } = context.query;
  let data = await fetch(`${process.env.slug_Api}?slug=${slug}`);
  let myProps = await data.json();
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // context.res.writeHead(307, { Location: `/tutorial/${slug}` }).end();

  return {
    props: { myProps }, // will be passed to the page component as props
  };
}

export default Slug;
