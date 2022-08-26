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
        `${
          process.env?.slug_Api_http || process.env?.slug_Api_https
        }?slug=${slug}`,
        {
          method: "get",
        }
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
  }, [router.isReady, slug, props.myProps]);
  return (
    <>
      <div>
        {blog &&
          blog.map((v) => {
            return (
              <div key={v.slug}>
                <Head>
                  <title>
                    {v.title} Tutorial | CodesPick | CodesPick Herokuapp.com
                  </title>
                  <meta name="robots" content="index, follow" />
                  <link
                    rel="canonical"
                    href="https://codespick.herokuapp.com/"
                  />
                  <meta content="general" name="rating" />
                  <link
                    rel="prefetch"
                    href="https://codespick.herokuapp.com/"
                  />
                  <meta content="codespick.herokuapp.com" name="copyright" />
                  <link
                    rel="prerender"
                    href="https://codespick.herokuapp.com/"
                  />
                  <meta
                    name="description"
                    content={`CodesPick - ${v.title}, CodesPick is a platform to learn code with programming language ${v.title}`}
                  />
                  <meta
                    name="keywords"
                    content={`CodesPick - ${v.title}, CodesPick is a platform to learn code with programming language ${v.title}`}
                  />
                  <meta property="og:site_name" content="CodesPick" />
                  <meta property="og:title" content="CodesPick" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://codespick.herokuapp.com/"
                  />
                  <meta property="og:locale" content="en-US" />
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
  let data = await fetch(
    `${process.env?.slug_Api_http || process.env?.slug_Api_https}?slug=${slug}`,
    {
      mode: "no-cors",
    }
  );
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
