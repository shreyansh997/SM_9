function sayHello () {
  var name =
   document.getElementById("name").value;
  if(name == "tony")
   var message = "<h2>marks of" + name + " are as follows! web programming=98 coa=72 mpmc=90</h2>";
                    
                    
  else 
    var message= "<h2>marks of" + name +" follows web programming=00 coa=-77 mpmc=-100 </h2>";

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
