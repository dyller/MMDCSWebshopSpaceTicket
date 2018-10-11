
function listTickets() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://easvspaceticketshop.azurewebsites.net/api/tickets',
        type: 'GET',
        dataType: 'json',
        success: function (tickets) {
            onGetTicketsSuccess(tickets);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
    console.log("hey");
}

function onGetTicketsSuccess(tickets) {
    // Iterate over the collection of data
    $.each(tickets, function (index, ticket) {
        // Add a row to the post table
        addTicketRow(ticket);
    });
}

function addTicketRow(ticket) {
    if ($("#area").length == 0) {
        $("#area").append("");
    }
    // Append row to <table>
    $("#area").append(
        buildTicketRow(ticket));
}

function buildTicketRow(ticket) {
    var d = new Date(ticket.travelDate);

    var tick = ticket;
    var ret =

"<div class='product'>"+
        "<div id='product_title'>"+
        "<h2>"+ticket.planet+"</h2>"+

        "</div>"+
        "<div id='product_img'>"+
        "<div>  <img src="+ticket.urlPicture+">"+
       " </div>"+
       " </div>"+

       " <div id='product_desc'>"+

       " <p style=text-align:left;>"+

        "Next Flight:"+
       "<span style=float:right;>"+("0" + d.getDate()).slice(-2)+"-"+("0" + (d.getMonth() + 1)).slice(-2)+"" +
        "-"+d.getFullYear()+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+("0" + d.getHours() ).slice(-2)+":"+("0" + d.getMinutes() ).slice(-2)+":"+("0" + d.getSeconds() ).slice(-2)+"<br></span>"+
        "</p>"+
       "<br>"+
        "<p></p>"+
        "<p style='text-align:left;'>"+
        "Duration of the Flight:"+
       " <span style='float:right;'>"+ticket.distance+"</span>"+
        "</p>"+
        "<br>"+
       " <p></p>"+
       " <p style='text-align:left;'>"+
       " Price:"+
"<span style='float:right;'>"+ticket.price+"k &euro;</span>"+
    "</p>"+
    "</div>"+

   " <div id='product_shop_buy'>"+

        "<div id='product_about'>"+
       " <a href='#'>ABOUT</a>"+
        "</div>"+

        "<div id='product_buy'>"+
       " <a  data-id="+ticket.ticketId + ">BUY</a>"+

       " <div id='tickets'>"+
       " <p>Tickets left:</p>"+
   " <div id='ticketnumber'>"+ticket.ticketLeft+"</div>"+

        "</div>"+
        "</div>"+
        "</div>"

    return ret;
}
var obj = { name: "John", age: 30, city: "New York" };

function createTicket() {
    // Call Web API to get a list of post

    $.ajax({

        url: 'https://easvspaceticketshop.azurewebsites.net/api/tickets',
        type: 'POST',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(
            {
                "planet": $("#planet").val(),
                "travelDate": $("#travelDate").val(),
                "distance": $("#distance").val(),
                "price": $("#price").val(),
                "ticketLeft": $("#ticketLeft").val(),
                "howManyTicket": "4",

                "description": "hey",
                "urlPicture": $("#urlPicture").val()
            }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
       }});

}
$('#myForm').on('submit',function(e){
    e.preventDefault();
   createTicket();

});

$('#area').on('click','a', event => {
update(event.currentTarget);
});

function update(ticketid) {

    var id = $(ticketid).data("id");
    $.ajax({
        url: 'https://easvspaceticketshop.azurewebsites.net/api/tickets/'+id,
        type: 'GET',
        dataType: 'json',
        success: function (ticket) {
            $.ajax({
                url: 'https://easvspaceticketshop.azurewebsites.net/api/tickets/'+id,
                type: 'PUT',
                data: JSON.stringify(
                    {
                        "ticketId": id,
                        "planet": ticket.planet,
                        "travelDate": ticket.travelDate,
                        "distance": ticket.distance,
                        "price": ticket.price,
                        "ticketLeft": ticket.ticketLeft-1,
                        "howManyTicket": ticket.howManyTicket,
                        "description": ticket.description,
                        "urlPicture": ticket.urlPicture

                    }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){alert(data);

                    window.location.reload(true);  },
                failure: function(errMsg) {
                    alert(errMsg);
                }});
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
    // Call Web API to get a list of posts
}