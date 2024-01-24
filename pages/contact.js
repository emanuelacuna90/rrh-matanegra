import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import LayoutContact from '../components/templates/LayoutContact/LayoutContact'

export default function Home() {
  return (
    <>
      <HeadSeo
        title="Matanegra SRL | Contacto"
        contact="Estamos para contestar tu dudas, escribinos tu consulta y nos pondremos en contacto a la brevedad"
      />
      <LayoutContact />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
