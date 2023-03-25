import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

export const showToastError = (title?: string) =>
    Toast.fire({
        icon: 'error',
        title: title || 'Ops! Some thing wrong'
    });

export const showToastSuccess = (title?: string) =>
    Toast.fire({
        icon: 'success',
        title: title || 'Success'
    });
