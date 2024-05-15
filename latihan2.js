function tampilMenu() {
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#card').append(`<div class="col-md-4"><div class="card"><img src="img/menu/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">Rp. ${data.harga}</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`);
        });
    });    
}
tampilMenu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();

    $('h1').html(kategori);
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        if(kategori === "All Menu") {
            $('#card').html('');
            tampilMenu();
            return;
        }
        $.each(menu, function(i, data) {
            if(data.kategori === kategori.toLowerCase()) {
                content += `
                <div class="col-md-4"><div class="card"><img src="img/menu/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">Rp. ${data.harga}</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>
                `
                $('#card').html(content);
            }
        })
    });
});