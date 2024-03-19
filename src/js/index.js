$(() => {
  $(".toggle").click(() => {
    $(".sidebar").toggleClass("close");
    $(".toggle").toggleClass("toggle-close");
    $(".container").toggleClass("full");
  });
  btnAct();
});

const btnAct = () => {
  $(".nav-btn").click(function (e) {
    e.preventDefault();
    $(".nav-btn").removeClass("active");
    $(this).addClass("active");
    menuBtn($(e.target).data("data"));
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
  }
};
const toggleContent = (data) => {
  $(".content").css("display", "none");
  $(data).css("display", "block");
};
