import Head from 'next/head'

const HeadSeo = ({
  title = 'Matanegra Consulting',
  content = 'Estamos para ayudarte. Ayudamos a impulsar el crecimiento',
  faviconUrl = '/favicon.ico',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content="consultora, rrhh, recursos humanos, neuquen, nqn, seleccion, personal, seleccion de personal, reclutamiento, reclutador, alto valle, postularte" />
      <link rel="icon" href={faviconUrl} />
    </Head>
  )
}

export default HeadSeo
