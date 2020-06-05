$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const food = $("select#food").val();
    const languages = $("select#languages").val();
    const band = $("select#band").val();
    const celebrity = $("select#celebrity").val();
    const drink = $("select#drink").val();

    const javascript1 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";
    const javascript2 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "tea";
    const javascript3 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "soda";
    const javascript4 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "willsmith" && drink === "coffee";
    const javascript5 = food === "burritos" && languages === "scripting" && band === "pinkfloyd" && celebrity === "mileycyrus" && drink === "coffee";
    const javascript5 = food === "burritos" && languages === "scripting" && band === "linkinpark" && celebrity === "britneyspears" && drink === "coffee";
    const javascript5 = food === "burritos" && languages === "scripting" && band === "thebeatles" && celebrity === "britneyspears" && drink === "coffee";


    if (javascript1 || javascript2 || javascript3 || javascript4 || javascript5) {
      $("#favoritelanague").text("javascript");
      $("#languagemessage").show();
    } else {
      $("#favoritelanague").text("something");
      $("#languagemessage").show();
    }

    event.preventDefault();

  });
});