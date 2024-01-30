import { dataFooter } from '../../../data/dataFooter'
import { dataMenu } from '../../../data/dataMenu'
import { dataWhatsapp } from '../../../data/dataWhatsapp'
import Whatsapp from '../../atoms/Whatsapp/Whatsapp'
import Footer from '../../organisms/Footer/Footer'
import Menu from '../../organisms/Menu/Menu'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Whatsapp
        logo={dataWhatsapp.logo}
        numberPhone={dataWhatsapp.numberPhone}
        message={dataWhatsapp.message}
      />
      <Menu logo={dataMenu.logo} items={dataMenu.items} socials={dataMenu.socials}/>
      <main className={`${styles.main} ${styles['scroll-container']}`}>{children}</main>
    <Footer items={dataFooter.items}/>
    </>
  )
}

export default Layout
