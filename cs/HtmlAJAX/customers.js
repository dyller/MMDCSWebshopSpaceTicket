
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
  }

  function onGetTicketsSuccess(tickets) {
    // Iterate over the collection of data
    $.each(tickets, function (index, ticket) {
      // Add a row to the post table
        addTicketRow(ticket);
    });
  }

  function addTicketRow(ticket) {
    // Check if <tbody> tag exists, add one if not
     if ($("#ticketsTable tbody").length == 0) {
      $("#ticketsTable").append("<tbody></tbody>");
     }
     // Append row to <table>
     $("#ticketsTable tbody").append(
       buildCustomerRow(ticket));
   }

   function buildCustomerRow(ticket) {
    var ret =
      "<tr>" +
       "<td>" + ticket.ticketId + "</td>" +
       "<td>" + ticket.travelDate + "</td>" +
       "<td>" + ticket.distance  + "</td>" +
        "<td>" + ticket.ticketLeft + "</td>" +
        "<td>" + ticket.howManyTicket + "</td>" +
        "<td>" + ticket.planet + "</td>" +
        "<td>" + ticket.description + "</td>" +
        "<td>" + ticket.uRLPicture + "</td>" +
      "<td>" + ticket.price + "</td>" +
      "<td>" +
        "<button type='button' " +
          "class='btn btn-info' " +
          "data-id='" + ticket.ticketId + "'>" +
          "<i class='fas fa-info-circle'></i>" +
        "</button>" +
      "</td >" +
      "<td>" +
      "<button type='button' " +
      "class='btn btn-danger' " +
      "data-id='" + ticket.ticketId + "'>" +
      "<i class='fas fa-minus-circle'></i>" +
      "</button>" +
      "</td >" +
      "</tr>";
    return ret;
  }
