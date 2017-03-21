function sayHello () {
  var name =
   document.getElementById("name").value;
  if(name == "tony")
   var message = "<h2>marks of" + name + " are as follows!</h2>";
  else 
    var message= "<h2>marks of" + name +"follows</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
