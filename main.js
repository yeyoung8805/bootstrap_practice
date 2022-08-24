//dropdown을 사용하기 위한 초기화
import Dropdown from "bootstrap/js/dist/dropdown"; //bootstrap 안의 dropdown만 불러온다(성능 최적화를 위해)
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
[...dropdownElementList].map(
  (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
);

//modal 을 사용하기 위한 초기화
new Modal(document.querySelector("#exampleModal"), {
  backdrop: "static", //배경 부분 클릭해도 닫히지 않게 옵션 설정함
});
// or
// const myModalAlternative = new bootstrap.Modal("#myModal", options);
