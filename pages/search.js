import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Search = (props) => {
  // const [queryData, setQueryData] = useState("");
  const [blog, setBlog] = useState([]);

  const router = useRouter();

  const getSearchedData = async () => {
    try {
      if (props.fullData.q === undefined) {
        router.push("/search");
        return;
      } else if (props.fullData.q !== undefined) {
        let mainData = await fetch(
          `${process.env?.search_Api_http || process.env?.search_Api_https}?q=${
            props.fullData.q
          }`,
          { mode: "no-cors" }
        );
        let fullDataInJson = await mainData.json();
        setBlog([fullDataInJson]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!router.isReady) return;
    getSearchedData();
  }, [router.isReady, props.fullData.q]);
  if (props.fullData.q === undefined) {
    return (
      <>
        <div
          style={{
            color: "#000",
            background: "#fff",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif",
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1
              style={{
                display: "inline-block",
                borderRight: "1px solid rgba(0, 0, 0,.3)",
                margin: 0,
                marginRight: "20px",
                padding: "10px 23px 10px 0",
                fontSize: "24px",
                fontWeight: 500,
                verticalAlign: "top",
              }}
            >
              404
            </h1>
            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                lineHeight: "49px",
                height: "49px",
                verticalAlign: "middle",
              }}
            >
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  lineHeight: "inherit",
                  margin: 0,
                  padding: 0,
                }}
              >
                The search could not be found{" "}
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {blog &&
          blog.map((v) => {
            return (
              <div key={v.q}>
                <h1>{v.title}</h1>
                <p>{v.para}</p>
              </div>
            );
          })}
      </>
    );
  }
};

export default Search;

export async function getServerSideProps(context) {
  // debugger;
  // const router = useRouter();

  let { q } = context.query;

  let data = await fetch(
    `${process.env?.search_Api_http || process.env?.search_Api_https}?q=${q}`,
    {
      mode: "no-cors",
    }
  );

  // let fullData = await data1.text();
  let fullData = await data.json();
  return {
    props: { fullData },
  };
}

// export async function getStaticProps(context) {
//   // console.log("====================================");
//   console.log(context);
//   // console.log("====================================");
//   let data = await fetch(`http://localhost:3000/api/hello`);
//   let myProps = data;

//   return {
//     props: { myProps }, // will be passed to the page component as props
//   };
// }
