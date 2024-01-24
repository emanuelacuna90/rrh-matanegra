import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import LayoutHome from '../components/templates/LayoutHome/LayoutHome'

export default function Home() {
  return (
    <>
      <HeadSeo title="Matanegra SRL" content="Estamos para ayudarte. El mejor precio asegurado" />
      <LayoutHome />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
