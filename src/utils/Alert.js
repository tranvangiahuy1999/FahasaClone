import Swal from "sweetalert2";

const alert = ({ title, msg, icon, ...props }) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: msg,
  });
};

export default alert;
