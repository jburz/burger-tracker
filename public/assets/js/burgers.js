//click listener for add burger button
$("#addBurger").on("click", function (event) {
    event.preventDefault();
    const newBurger = $("#addInput").val().trim();
    const newBurgerObj = {
        data: newBurger
    }
    console.log("new burger: " + newBurgerObj);


     $.ajax("/api/burgers/", {
         method: "POST",
         data: newBurgerObj
     }).then(function(res) {
         console.log('Burger added');
         location.reload();
     });
});

//click listener for devour button
$(".devourButton").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id")

    const devouredObj = {
        devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
        method: "PUT",
        data: devouredObj
    }).then(function (res) {
        console.log("devoured changed");
        location.reload();
    });
});

