import Swal from "sweetalert2";

export function subscribeSuccessAlert() {
  Swal.fire({
    icon: "success",
    title: "Thanks for subscribing!",
    text: "You have successfully signed up for updates.",
    confirmButtonText: "close",
    customClass: {
      confirmButton: "popup-button",
    },
    buttonsStyling: false,
  });
}

export function subscribeEmailAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please enter a valid email address.",
    confirmButtonText: "close",
    customClass: {
      confirmButton: "popup-button",
    },
    buttonsStyling: false,
  });
}

export function subscribeAlreadyAlert() {
  Swal.fire({
    icon: "info",
    title: "Already Subscribed",
    text: "This email is already subscribed to our updates.",
    confirmButtonText: "close",

    customClass: {
      confirmButton: "popup-button",
    },
    buttonsStyling: false,
  });
}

export function subscribeErrorAlert() {
  Swal.fire({
    icon: "error",
    title: "Subscription Failed",
    text: "An error occurred while trying to subscribe. Please try again later.",
    confirmButtonText: "close",
    customClass: {
      confirmButton: "popup-button",
    },
    buttonsStyling: false,
  });
}
