//click listener for devour button
$(".devourButton").on("click", function() {
    const id = $(this).data("id")
    console.log(id);

    const devouredObj = {
        devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredObj
    }).then(function() {
        console.log("devoured changed to " + devoured);
    });
});