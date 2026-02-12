const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  if (form.checkValidity()) { // Only run if all required fields are filled correctly
    notification(); // Call your function
  } else {
    form.reportValidity(); // Show browser validation messages
  }
});

function notification() {
    Toast.fire({
        theme: "dark",
        icon: "success",
        title: "Pesan berhasil terkirim!"
    });
}
