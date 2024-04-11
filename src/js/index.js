$(() => {
  $(".toggle").click(() => {
    $(".sidebar").toggleClass("close");
    $(".toggle").toggleClass("toggle-close");
    $(".container").toggleClass("full");
  });
  btnAct();
  tabBtn();
  AddEmployeeOpenModal();
  AddEmployeeCloseModal();
  openSettings();
  closeSettings();
});

const btnAct = () => {
  $(".nav-btn").click(function (e) {
    e.preventDefault();
    $(".nav-btn").removeClass("active");
    $(this).addClass("active");
    menuBtn($(e.target).data("data"));
  });
};

const tabBtn = () => {
  $(".tab-btn").click(function (e) {
    e.preventDefault();
    $(".tab-btn").removeClass("activetab");
    $(this).addClass("activetab");
    tabMenu($(e.target).data("tab"));
  });
};

const AddEmployeeOpenModal = () => {
  $("#add_employee").click(() => {
    $(".manage_employee_modal .modal").css("display", "block");
    $(".manage_employee_modal .content").css("display", "block");
  });
};
const AddEmployeeCloseModal = () => {
  $("#manageCloseModal").click(() => {
    $(".manage_employee_modal .modal").css("display", "none");
    $(".manage_employee_modal .content").css("display", "none");
  });
};

const openSettings = () => {
  $("#btn-settings").click(() => {
    $(".settings_modal").css("display", "block");
    $(".settings_modal .modal .content").css("display", "flex");
  });
};
const closeSettings = () => {
  $("#closeSettings").click(() => {
    $(".settings_modal").css("display", "none");
  });
};

const menuBtn = (data) => {
  switch (data) {
    case "dashboard":
      toggleContent(".dashboard");
      break;
    case "manage":
      toggleContent(".manage");
      break;
    case "timesheet":
      toggleContent(".timesheet");
      break;
    case "approval":
      toggleContent(".approval");
      break;
    case "payroll":
      toggleContent(".payroll");
      break;
  }
};

const tabMenu = (data) => {
  switch (data) {
    case "leave":
      toggleTab(".leave-request-box");
      break;
    case "cash":
      toggleTab(".cash-advance-box");
      break;
  }
};

const toggleContent = (data) => {
  $(".content").css("display", "none");
  $(data).css("display", "block");
};

const toggleTab = (data) => {
  $(".tab-content").css("display", "none");
  $(data).css("display", "block");
};
