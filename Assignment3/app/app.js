var users = [];

function initListeners() {
  $("submit").click((e) => {
    e.preventDefault();
    let allUsers = JSON.parse(localStorage.getItem("Person"));

    let fn = $("#firstName").val();
    let ln = $("#lastName").val();
    let age = $("#age").val();
    let phoneNumber = $("#phoneNumber").val();
    let email = $("#Email").val();
    let classes = $("#Classes").val();

    if (
      fn != "" &&
      ln != "" &&
      age != "" &&
      phoneNumber != "" &&
      email != "" &&
      classes != ""
    ) {
      let userObj = {
        fName: fn,
        lName: ln,
        Age: age,
        Number: phoneNumber,
        Email: email,
        Classes: classes,
      };
      allUsers.push(userObj);
      //console.log(users);
      localStorage.setItem("Person", JSON.stringify(allUsers));

      // localStorage.setItem("Person", JSON.stringify(userObj));
      //console.log(localStorage.getItem("Person"));

      $("#firstName").val("");
      $("#lastName").val("");
      $("#age").val();
      $("#phoneNumber").val();
      $("#Email").val();
      $("#Classes").val();
    } else {
      alert("Enter both first and last name!");
    }
  });

  $("#getStudents").click((e) => {
    e.preventDefault();
    console.log("hello");
    $("#app").html("");
    let allUsers = JSON.parse(localStorage.getItem("Person"));

    $.each(allUsers, function (idx, user) {
      console.log(user.fName);
      $("app").append(
        `<p>${user.fName} ${user.lName} ${user.Age} ${user.Number} ${user.Email} ${user.Classes}</p>`
      );
    });

    /*     for (let index = 0; index < allUsers.length; index++) {
      console.log(allUsers[index].fName);
      console.log(allUsers[index].lName);
    } */
  });
}

function initSite() {
  if (localStorage) {
    let people = localStorage.getItem("Person");
    //console.log(people);
    if (people) {
      let persons = JSON.parse(localStorage.getItem("Person"));
      console.log("persons");
    } else {
      localStorage.setItem("Person", []);
      alert("No people added yet");
    }

    /* console.log("I have it!");
    localStorage.setItem("Person", JSON.stringify(userObj));
    console.log(localStorage.getItem("Person"));
    let retreivedObj = JSON.parse(localStorage.getItem("Person"));
    console.log(retreivedObj); */
  } else {
    console.log("No Localstorage");
  }
}

$(document).ready(function () {
  initListeners();
  initSite();
});
