function sayHello () {
  var name =
   document.getElementById("name").value;
  if(name == "tony")
   var message = "<h2>marks of " + name + " are as follows! <br> web programming=98 <br> coa=72 <br> mpmc=90</h2>";
                    
                    
  else if(name =="stark") 
    var message= "<h2>marks of " + name +" follows <br> web programming=00 <br> coa=-77 <br> mpmc=-100 </h2>";
else 
  var message= "<h2>student doesn't exist try different name</h2>";
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
