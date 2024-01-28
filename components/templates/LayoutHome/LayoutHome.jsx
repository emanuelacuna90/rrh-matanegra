import Hero from '../../organisms/Hero/Hero'
import LogosSlider from '../../organisms/LogosSlider/LogosSlider'
import ServiceItemGrid from '../../organisms/ServiceItemGrid/ServiceItemGrid'
import Layout from '../Layout/Layout'
import Contact from '../../organisms/Contact/Contact'
import { data } from '../../../data/dataContact'
import { emailJsContactTemplateId } from '../../../utils/constants'
import Tabber from '../../organisms/Tabber/Tabber'
import Accordions from '../../organisms/Accordions/Accordions'
import Title from '../../atoms/Title/Title'

const LayoutHome = () => {
  const { contact, contactMap } = data
  return (
    <Layout>
      <Hero />
      <LogosSlider/>
      <ServiceItemGrid />
      <Tabber/>
      <Accordions />
      <Contact title={contact.title} copy={contact.copy} templateId={emailJsContactTemplateId} />
    </Layout>
  )
}

export default LayoutHome
