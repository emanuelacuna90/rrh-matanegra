import 'antd/dist/antd.css'
import styles from './FormEmail.module.scss'
import { Form, Input, Select, DatePicker, InputNumber, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Button from '../../atoms/Button/Button'
import { hourOptions, placeOptions } from '../../../data/dataContact'
import emailjs from '@emailjs/browser'
import { toastError, toastSuccess } from '../../../utils/toast'
import { useState } from 'react'
import { renderDate } from '../../../utils/date'
const { TextArea } = Input

const antIcon = <LoadingOutlined style={{ fontSize: 18, color: 'white', marginLeft: 10 }} spin />

export const FormEmail = ({ layout = 'contact', serviceId, templateId }) => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState()
  const isVehicleLayout = layout === 'vehicle'

  const onFinish = (e) => {
    setIsLoading(true)

    const dateStart = renderDate(new Date(e.dateStart))
    const dateEnd = renderDate(new Date(e.dateEnd))

    const dataForm = {
      ...e,
      dateStart,
      dateEnd,
    }

    const emailJsServiceId = 'service_gulzkvm'
    const emailJsContactTemplateId = 'template_s8kgr86'

    emailjs
      .send(emailJsServiceId, emailJsContactTemplateId, dataForm)
      .then((res) => {
        console.log('res', res)
        toastSuccess({ text: 'Enviado con exito' })
        form.resetFields()
      })
      .catch((error) => {
        toastError({ text: error?.text ? error?.text : error })
        console.log('error', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Form layout="vertical" className={styles.form} onFinish={onFinish}>
      <div>
      <div className={styles.contentInputs}>
      <Form.Item name="name" label="Nombre y Apellido" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Teléfono">
          <InputNumber />
        </Form.Item>
      </div>

        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>

      </div>

      <div>
        <Form.Item name="message" label="Mensaje">
          <TextArea rows={4} />
        </Form.Item>

        <div className={styles.buttonContainer}>
          <Button className={styles.button}>
            Enviar {isLoading && <Spin indicator={antIcon} />}
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default FormEmail
