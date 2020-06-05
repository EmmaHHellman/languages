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
      const javascript = javascript1 || javascript2 || javascript3 || javascript4 || javascript5 || javascript6 || javascript7 || javascript8 || javascript9 || javascript10 || javascript11;

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
      const c = c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8 || c9 || c10 || c11;

      //All correct for swift
      const swift1 = food === "salad" && languages === "generalpurpose" && band === "linkinpark" && celebrity === "willsmith" && drink === "soda";
      //Four correct for swift
      const swift2 = food === "salad" && languages === "generalpurpose" && band === "linkinpark" && celebrity === "willsmith" && drink === "tea";
      const swift3 = food === "salad" && languages === "generalpurpose" && band === "linkinpark" && celebrity === "willsmith" && drink === "coffee";
      const swift4 = food === "salad" && languages === "generalpurpose" && band === "linkinpark" && celebrity === "britneyspears" && drink === "soda";
      const swift5 = food === "salad" && languages === "generalpurpose" && band === "linkingpark" && celebrity === "mileycyus" && drink === "soda";
      const swift6 = food === "salad" && languages === "generalpurpose" && band === "thebeatles" && celebrity === "willsmith" && drink === "soda";
      const swift7 = food === "salad" && languages === "generalpurpose" && band === "pinkfloyd" && celebrity === "willsmith" && drink === "soda";
      const swift8 = food === "salad" && languages === "scripting" && band === "linkinpark" && celebrity === "willsmith" && drink === "soda";
      const swift9 = food === "salad"  && languages === "objectorieneted" && band === "linkinpark" && celebrity === "willsmith" && drink === "soda";
      const swift10 = food === "burritos"  && languages === "generalpurpose" && band === "linkinpark" && celebrity === "willsmith" && drink === "soda";
      const swift11 = food === "tacos"  && languages === "generalpurpose" && band === "linkinpark" && celebrity === "willsmith" && drink === "soda";
      const swift = swift1 || swift2 || swift3 || swift4 || swift5 || swift6 || swift7 || swift8 || swift9 || swift10 || swift11;

      const none = !javascript || !c || !swift;

      if (javascript) {
        $("#favoritelanague").text("javascript");
        $("#languagemessage").show();
      } else if (c) {
        $("#favoritelanague").text("C#");
        $("#languagemessage").show();
      } else if (swift) {
        $("#favoritelanague").text("Swift");
        $("#languagemessage").show();
      } else if (none) {
        $("#favoritelanague").text("You would like to learn a variety of languages");
        
      }

      event.preventDefault();

  });
});