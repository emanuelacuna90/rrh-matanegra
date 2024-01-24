import Layout from '../Layout/Layout'
import Contact from '../../organisms/Contact/Contact'
import { data } from '../../../data/dataContact'
import { emailJsContactTemplateId } from '../../../utils/constants'
import ContactMap from '../../organisms/ContactMap/ContactMap'

const LayoutContact = () => {
  const { contact, contactMap } = data
  return (
    <Layout>
      <ContactMap title={contactMap.title} copy={contactMap.copy} />
      <Contact title={contact.title} copy={contact.copy} templateId={emailJsContactTemplateId} />
    </Layout>
  )
}

export default LayoutContact
