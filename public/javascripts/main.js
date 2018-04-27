$('form').submit(function (e) {
    e.preventDefault(e);

    $.ajax({
        url: $('form').attr('action'),
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({name: "peetj@icloud.com", password: "password"}),
        success: function (data) {
            console.log('Form response:', data);
            window.location = "/mypage"
        }
    });
});