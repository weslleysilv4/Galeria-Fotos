$(document).ready(function(){
    
    document.querySelector('header button');
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImg = $('#endereco-img').val();
        const newItem = $('<li></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(newItem);
        $(`<figcaption>
                <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho Real"> 
                    Ver imagem em tamanho real
                </a>
        </figcaption>`).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn();
        $('#endereco-img').val('');
    })
})