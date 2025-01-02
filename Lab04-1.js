function clickMe() {
   $("#col1 p").html("My Lab04 jQuery DOM Example");
   
   const colors = ["Red", "Green","Blue","Yellow","Grey","Black"];
   $("#colorlist li").each(function(index) {
       $(this).css("color", colors[index].toLowerCase());
   });

    const animals = [
        '<img src="img/dog.jpg" alt="Dog">',
        '<img src="img/cat.png" alt="Cat">',
        '<img src="img/Mouse.jpg" alt="Mouse">'
    ];
    $("#animallist").html(animals.map(img => `<li>${img}</li>`).join(""));
}
