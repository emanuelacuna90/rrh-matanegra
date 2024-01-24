import { cards } from '../../data/dataVehicles'
import HeadSeo from '../../components/templates/HeadSeo/HeadSeo'
import LayoutSingle from '../../components/templates/LayoutSingle/LayoutSingle'

const VehicleDetail = ({ vehicleData }) => {
  return (
    <>
      <HeadSeo title={`Matanegra SRL | ${vehicleData.modelo}`} content="Consulta por reserva" />
      <LayoutSingle vehicleData={vehicleData} />
    </>
  )
}

export default VehicleDetail

// Static Props
export async function getStaticPaths() {
  return {
    paths: cards.map(({ slug }) => ({
      params: {
        vehicle: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { vehicle } = params
  const vehicleData = cards.find((card) => card.slug === vehicle)

  return {
    props: {
      vehicleData,
    },
  }
}
