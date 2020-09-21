import Head from "next/head";

const AniTitle = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <h1
        className="animate__animated  animate__swing"
        style={{ textAlign: "center", margin: 20 }}
      >
        Welcome To Our Album
      </h1>
    </>
  );
};

export default AniTitle;
