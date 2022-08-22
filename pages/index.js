import Head from "next/head";
import React, { useContext } from "react";
import AllContent from "../contexts/AllContext";

export default function Home() {
  const { colorMode } = useContext(AllContent);
  return (
    <div
      className={`bg-${colorMode === "#F7F7F7" ? "white" : "rgb(26, 38, 40)"}`}
    >
      <Head>
        <title>CodesPick - Home</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codespick.herokuapp.com/" />
        <meta content="general" name="rating" />
        <link rel="prefetch" href="https://codespick.herokuapp.com/" />
        <meta content="codespick.herokuapp.com" name="copyright" />
        <link rel="prerender" href="https://codespick.herokuapp.com/" />
        <meta
          name="description"
          content="CodesPick - Home, CodesPick is a platform to learn code with programming language like C, C++, JAVA, PYTHON, JAVASCRIPT, PHP"
        />
        <meta
          name="keywords"
          content="CodesPick - Home, CodesPick is a platform to learn code with programming language like C, C++, JAVA, PYTHON, JAVASCRIPT, PHP"
        />
        {/* <meta property="og:site_name" content="CodesPick" />
        <meta property="og:title" content="CodesPick" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codespick.netlify.app/" />
        <meta property="og:locale" content="en-US" /> */}
      </Head>
      <h1 className={`text-${colorMode === "#F7F7F7" ? "black" : "white"}`}>
        CodesPick
      </h1>

      <div className={`container`}>
        <div className="col s12 m7 p-4">
          <div className="card vertical">
            <div className="card-image">
              <img
                loading="lazy"
                src="https://unsplash.it/400/300?image=503"
                className="fadeIn"
                alt="unsplash"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h1 className="card-title">San Francisco</h1>
                <p className="para-desc">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
              </div>
              {/* <div className="card-action">
                  <a href="#">This is a link</a>
                </div> */}
              <button className="btn btn-secondary btn-style">Link</button>
            </div>
          </div>
        </div>

        <div className="col s12 m7 p-4">
          <div className="card vertical" id="fadedfx">
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title">New York </span>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="card-image">
              <img
                loading="lazy"
                src="https://unsplash.it/400/300?image=736"
                className="fadedfx"
              />
            </div>
          </div>
        </div>

        <div className="col s12 m7 p-4">
          <div className="card vertical">
            <div className="card-image">
              <img
                loading="lazy"
                src="https://unsplash.it/400/300?image=763"
                className="fadedfx"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title">London</span>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        perferendis laboriosam tenetur magni, qui odit sequi in soluta quis
        nulla repellat minima repudiandae beatae molestiae temporibus explicabo
        possimus illum. Dolores, quidem minus suscipit in quo, laudantium non ea
        ipsum totam assumenda voluptatibus debitis laboriosam consequuntur est
        repellendus? Quo expedita in optio possimus quibusdam ipsum explicabo,
        consequuntur, blanditiis rem iure quae quis. Molestiae perspiciatis
        illum nam eaque ab? Dolorum vero tenetur dolore porro id? Harum fugiat
        veniam voluptates cum blanditiis, dolorem ea eum dolor omnis laudantium,
        praesentium atque nisi, tenetur eligendi aliquam molestiae
        necessitatibus numquam earum doloremque ducimus eius! Blanditiis
        mollitia magnam corporis alias quibusdam fugiat quisquam ea dolorum
        facilis accusamus quidem maiores sapiente, aut placeat esse provident
        totam excepturi rem velit qui quod quaerat libero quo. Voluptates
        dolorum accusamus quibusdam fugit nostrum itaque iste animi aut nobis
        praesentium optio officia sed amet, suscipit illum maiores quis velit
        enim voluptas quidem laudantium atque sit! Adipisci itaque commodi
        magnam praesentium sint magni consequatur suscipit iusto minus pariatur!
        Possimus eaque aliquid vel animi recusandae voluptate a sequi? Tempore
        repellat quam laborum consequuntur voluptatum, maiores aliquam!
        Deserunt, numquam delectus. Et possimus repellendus nesciunt est
        debitis, iure magnam sunt repudiandae id corrupti cum, quam atque? Enim
        ab ea repellendus illo voluptates atque, optio aspernatur facilis itaque
        fugit iusto corporis nesciunt dicta molestias, dolore dignissimos
        temporibus voluptatibus voluptas, voluptatem magni officiis officia!
        Officiis aut voluptas sequi illum, illo libero, dolorum, perspiciatis
        quidem perferendis dolorem ad eos? Itaque fugiat quod rem sunt error?
        Minima amet, totam in odit magni saepe maiores molestiae dicta
        repudiandae exercitationem sequi delectus impedit. Illo possimus eos
        quia eveniet odio expedita repudiandae perspiciatis, ipsum ex nostrum
        suscipit, sed explicabo a. Animi natus cum voluptatibus alias porro
        error temporibus maxime asperiores. Molestias nam natus distinctio
        quaerat nihil, veniam officia quam expedita ex, minus adipisci
        laboriosam molestiae quae rerum deleniti modi dolores quisquam itaque
        excepturi cupiditate, esse ipsam. Dolores est deleniti, voluptatem animi
        accusantium eum illum eos adipisci at ullam culpa aliquid repudiandae
        nisi accusamus libero, non omnis. Natus dignissimos possimus dicta!
        Animi accusantium assumenda odio itaque nulla eius delectus possimus,
        eaque ab autem voluptatibus nostrum alias ad. Quae sequi, nesciunt,
        sapiente soluta maxime dignissimos provident veritatis fuga temporibus
        molestiae asperiores aperiam doloremque veniam, cum accusamus illum rem.
        Esse, nulla? A earum temporibus accusantium fuga reprehenderit
        aspernatur adipisci soluta fugit quisquam! Animi, cupiditate dolorum
        necessitatibus illo voluptate nihil. Tempore quidem quae reiciendis
        libero! Non, a?
      </p>
    </div>
  );
}
