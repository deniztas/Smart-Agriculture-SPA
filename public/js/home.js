$('#sendMessageButton').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();

    var jsonString = { name: name, email: email, phone: phone, message: message };
    $.ajax({
        type: "POST",
        url: "/",
        data: jsonString,
        success: function (success) {
            alert("talebiniz alınmıştır. \n" + jsonString.email + " adresinize geri dönüş yapılacaktır.\nilginiz için teşekkür ederiz.");
        }
    });
    return false;
});

