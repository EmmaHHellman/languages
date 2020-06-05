$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const food = $("select#food").val();
    const languages = $("select#languages").val();
    const band = $("select#band").val();
    const celebrity = $("select#celebrity").val();
    const drink = $("select#drink").val();

    //All correct for Javascript
    const javascript1 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";
    //Four correct for Javascript
    const javascript2 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "tea";
    const javascript3 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "soda";
    const javascript4 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "willsmith" && drink === "coffee";
    const javascript5 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "mileycyrus" && drink === "coffee";
    const javascript6 = food === "burritos" && languages === "scripting" && band === "linkinpark" && celebrity === "britneyspears" && drink === "coffee";
    const javascript7 = food === "burritos" && languages === "scripting" && band === "thebeatles" && celebrity === "britneyspears" && drink === "coffee";
    const javascript8 = food === "burritos" && languages === "objectoriented" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";
    const javascipt9 


    if (javascript1 || javascript2 || javascript3 || javascript4 || javascript5 || javascript6 || javascript7 ) {
      $("#favoritelanague").text("javascript");
      $("#languagemessage").show();
    } else {
      $("#favoritelanague").text("something");
      $("#languagemessage").show();
    } 

    event.preventDefault();

  });
});