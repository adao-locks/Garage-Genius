const custumers = ['microsoft', 'apple', 'amazon', 'alibaba', 'google', 'ibm', 'American Express','Automatic Data Processing']

custumers.forEach(buscarImagem)

function buscarImagem(custumer, index) {
    
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/logo?name=' + custumer,
        headers: { 'X-Api-Key': 'xkDelX+I1AieplkN3A1kJg==QsIjci00P0BIIAUf'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            let logo = document.getElementById('custumer_'+index)
            logo.setAttribute('src', result[0].image)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}