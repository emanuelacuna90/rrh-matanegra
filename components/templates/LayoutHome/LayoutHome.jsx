import Hero from '../../organisms/Hero/Hero'
import LogosSlider from '../../organisms/LogosSlider/LogosSlider'
import ServiceItemGrid from '../../organisms/ServiceItemGrid/ServiceItemGrid'
import Layout from '../Layout/Layout'
import Contact from '../../organisms/Contact/Contact'
import { data } from '../../../data/dataContact'
import { emailJsContactTemplateId } from '../../../utils/constants'

const LayoutHome = () => {
  const { contact, contactMap } = data
  return (
    <Layout>
      <Hero />
      <LogosSlider/>
      <ServiceItemGrid />
      <Contact title={contact.title} copy={contact.copy} templateId={emailJsContactTemplateId} />
    </Layout>
  )
}

export default LayoutHome
