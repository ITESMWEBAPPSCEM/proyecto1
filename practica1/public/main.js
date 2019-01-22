function goToClass() {
    document.location.href = "https://classroom.google.com/u/1/c/Mjc0MTE0NTY3ODZa";
}

$.ajax({
    url: constant.APIURL + 'comunidad/listar',
    method: 'POST',
    xhrFields: {
        withCredentials: true
    },
    contentType: 'application/x-www-form-urlencoded',
    data: 'params={"nombre":"' + searchTerm + '"}',
    success(response) {
        let r = JSON.parse(response);

    });
    $('#searchContainer').html(html);
                    },
    error(error) {
        console.log({ error });
    }
			});