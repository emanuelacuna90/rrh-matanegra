export const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

export const renderDate = (date) => {
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${day} de ${month} de ${year}`
}
