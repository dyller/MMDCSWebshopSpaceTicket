
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
function createUser() {
    // Call Web API to get a list of post

    $.ajax({

        url: 'https://easvspaceticketshop.azurewebsites.net/api/users',
        type: 'POST',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(
            {
                "admin": true,
                "username": "random",
                "passsword": $("#passsword").val(),
                "emailAddress": $("#emailAddress").val()
            }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }});

}
$('#myForm2').on('submit',function(e){
    console.log("hey");
    e.preventDefault();
    createUser();

});
