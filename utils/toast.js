import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

export const toastSuccess = ({ text }) => {
  Toast.fire({
    icon: 'success',
    title: text,
  })
}

export const toastError = ({ text }) => {
  Toast.fire({
    icon: 'error',
    title: text,
  })
}
