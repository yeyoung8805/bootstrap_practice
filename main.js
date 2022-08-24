import Dropdown from "bootstrap/js/dist/dropdown"; //bootstrap 안의 dropdown만 불러온다(성능 최적화를 위해)

const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
[...dropdownElementList].map(
  (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
);
