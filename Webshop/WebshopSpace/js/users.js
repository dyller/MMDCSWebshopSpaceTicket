
$('#myForm').on('submit',function(e){
    e.preventDefault();
    createTicket();

});

function createTicket() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://easvspaceticketshop.azurewebsites.net/api/users',
        type: 'GET',
        dataType: 'json',
        success: function (Users) {
            onGetUsersSuccess(Users);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });

    }function onGetUsersSuccess(Users) {
    // Iterate over the collection of data
    $.each(Users, function (index, user) {
        // Add a row to the post table
console.log(user.emailAddress+"   "+ user.passsword);
        console.log($("#emailAddress").val()+"   "+ $("#passsword").val());
        if($("#emailAddress").val()== user.emailAddress && $("#passsword").val()== user.passsword)
        {
            console.log("succes");
            location.href = "newProduct.html";
        }

    })

}