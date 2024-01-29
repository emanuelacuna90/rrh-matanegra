import { data } from '../../../data/dataSingle'
import { emailJsSingleTemplateId } from '../../../utils/constants'
import Contact from '../../organisms/Contact/Contact'
import SingleCard from '../../organisms/SingleCard/SingleCard'
import Layout from '../Layout/Layout'

const LayoutSingle = ({ vehicleData }) => {
  return (
    <Layout>
      <SingleCard {...vehicleData} />
      <Contact
        title={data.title}
        copy={data.copy}
        templateId={emailJsSingleTemplateId}
        layout="vehicle"
      />
    </Layout>
  )
}

export default LayoutSingle
