//dropdown을 사용하기 위한 초기화
import Dropdown from "bootstrap/js/dist/dropdown"; //bootstrap 안의 dropdown만 불러온다(성능 최적화를 위해)

const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
[...dropdownElementList].map(
  (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
);

//modal 을 사용하기 위한 초기화
import Modal from "bootstrap/js/dist/modal";
const myModal = new Modal(document.getElementById("myModal"), options);
// or
// const myModalAlternative = new bootstrap.Modal("#myModal", options);
