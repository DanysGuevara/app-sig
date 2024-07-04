import Head from 'next/head';

const Emulador = () => {
  return (
    <>
      <Head>
        <title>Emulador GBA</title>
        <meta name="description" content="Emulador de Game Boy Advance" />
      </Head>
      <div>
        <iframe
          src="/index.html"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          title="Emulador GBA"
        ></iframe>
      </div>
    </>
  );
};

export default Emulador;