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
    const javascript9 = food === "burritos"  && languages === "generalpurpose" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";
    const javascript10 = food === "tacos"  && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";
    const javascript11 = food === "salad"  && languages === "scripting" && band === "pinkfloyd" && celebrity === "britneyspears" && drink === "coffee";

    //All correct for c#
    const c1 = food === "tacos" && languages === "objectoriented" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "tea";
    //Four correct for c#
    const c2 = food === "tacos" && languages === "objectoriented" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "coffee";
    const c3 = food === "tacos" && languages === "objectoriented" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "soda";
    const c4 = food === "tacos" && languages === "objectoriented" && band === "thebeatles" && celebrity === "willsmith" && drink === "tea";
    const c5 = food === "tacos" && languages === "objectoriented" && band === "thebeatles" && celebrity === "britneyspears" && drink === "tea";
    const c6 = food === "tacos" && languages === "objectoriented" && band === "linkinpark" && celebrity === "mileycyrus" && drink === "tea";
    const c7 = food === "tacos" && languages === "objectoriented" && band === "pinkfloyd" && celebrity === "mileycyrus" && drink === "tea";
    const c8 = food === "tacos" && languages === "scripting" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "tea";
    const c9 = food === "tacos"  && languages === "generalpurpose" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "tea";
    const c10 = food === "burritos"  && languages === "objectoriented" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "tea";
    const c11 = food === "salad"  && languages === "objectoriented" && band === "thebeatles" && celebrity === "mileycyrus" && drink === "tea";


    if (javascript1 || javascript2 || javascript3 || javascript4 || javascript5 || javascript6 || javascript7 || javascript8 || javascript9 || javascript10 || javascript11) {
      $("#favoritelanague").text("javascript");
      $("#languagemessage").show();
    } else {
      $("#favoritelanague").text("something");
      $("#languagemessage").show();
    } 

    event.preventDefault();

  });
});