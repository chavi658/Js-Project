const PicturContainer = document.querySelector(".Pictur-container");
if (PicturContainer) {
  PicturContainer.innerHTML = "";
  console.log(PicturContainer);
}
window.onload = function () {
 creatElements();
}
function printPicture(obj) {


  PicturContainer.innerHTML += `<div class="Pictur">
  <img  class="im"src="../${obj.src}" alt="${obj.myname} "/>
  <a href="main.html?"cat_id"=${obj.category}"></a>
  </div>`;
}

function creatElements() {
  const data_from_url = location.search;
  const params_obj = new URLSearchParams(data_from_url);
  const f_cat = params_obj.get("cat_id");

  // עכשיו כשיש לי את הקטגוריה - נלך לכותרת הראשית בעמוד ונכניס לתוכה את השם של הקטגוריה מתוך האובייקט
  const myTitle = categories.find(function (value) {
    return value.id == f_cat;
  });
  if(myTitle){
  document.querySelector("#my_title").innerHTML = myTitle.name;}

  const current_cat = categories.find(function (obj) {
    return obj.id == f_cat;
  });

  // יצירת מערך מוצרים מסוננים לפי הקטגוריה מהקישור
  // רוץ בלולאה על המערך המסונן כל פריט שלח לפונציה פרינט
  const newArr = products.filter(function (obj) {
    return f_cat === obj.category
  }
  );
  for (let item of newArr) {
    printPicture(item);
  }
}

if (document.querySelector("#printBtn")) {
  document.querySelector("#printBtn").onclick = function () {
    window.print();
  };
}
const inputForm = document.querySelector("#form");
if(inputForm){
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  setTimeout(function () {
    document.querySelector("#timer").innerHTML = "הפרטים נשמרו בהצלחה!";
    console.log("jfjdf");
  }, 2000)

  const users = [];
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  const user = { name, email, phone };

  const exist = users.find(x => x.name === name && x.email === email && x.phone === phone);
  if (exist) {
    alert('Existing user');
  } else {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Successfully added user');
  }

})
}

const size = document.querySelectorAll(".MyButton");
for (let i = 0; i < size.length; i++) {
  size[i].onclick = function () {
    const imge = document.querySelectorAll(".im");
    for (let i = 0; i < imge.length; i++) {
      switch (this.id) {
        case "small":
          imge[i].classList.add("small")
          imge[i].classList.remove("medium")
          imge[i].classList.remove("big")
          break;
        case "medium":
          imge[i].classList.add("medium")
          imge[i].classList.remove("small")
          imge[i].classList.remove("big")
          break;
        case "big":
          imge[i].classList.add("big")
          imge[i].classList.remove("medium")
          imge[i].classList.remove("small")
          break;
      }

    }
  }

}
let name1 = document.querySelector("#name");
let email1 = document.querySelector("#email");
let phone1 = document.querySelector("#phone");
if (name1){
name1.onblur = function () {
  check(this);
}}
if (email1){
email1.onblur = function () {
  check(this);
}}
if(phone1){
phone1.onblur = function () {
  check(this);
}}
function check(input) {
  if (input.value == "") {
    input.style.backgroundColor = "red";

  }
  else {
    input.style.backgroundColor = "white";
  }

}
