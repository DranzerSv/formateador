const fecha = document.getElementById('fecha');
const noFormateado= document.getElementById("noformateado");
const botonFormatear = document.getElementById('boton-formatear')



botonFormatear.addEventListener("click", function(){
    const texto=noFormateado.value;
    let sinEspaciosExtra = texto.replace(/\s+/g, ' ');
    let resultado='';
    const frases = [
        'Descuento CREDISIMAN se verá reflejado al ingresar número de tarjeta',
         'Descuento aplica sobre precio regular', 
        'Hasta 20% descuento con CREDISIMAN',
        'Hasta 25% descuento con CREDISIMAN',
        'Hasta 30% descuento con CREDISIMAN',
        'Hasta 35% descuento con CREDISIMAN',
        'Hasta 40% descuento con CREDISIMAN',
        '10% descuento con CREDISIMAN',
        '15% descuento con CREDISIMAN',
        '20% descuento con CREDISIMAN',
        '25% descuento con CREDISIMAN',
        '35% descuento con CREDISIMAN',
        '40% descuento con CREDISIMAN',
        '45% descuento con CREDISIMAN',
        '50% descuento con CREDISIMAN',
        '25% descuento con CREDISIMAN',
        '25% descuento con CREDISIMAN',
        '10% descuento con OTRAS FORMAS DE PAGO',
        '15% descuento con OTRAS FORMAS DE PAGO', 
        '20% descuento con OTRAS FORMAS DE PAGO', 
        '25% descuento con OTRAS FORMAS DE PAGO', 
        '30% descuento con OTRAS FORMAS DE PAGO',
        'Descuento aplica en productos anunciados en:',
        'Válido con pago CREDISIMAN',
        'Válido con toda forma de pago',
        'No aplica descuento familiar.',
        'Válido en siman.com, call center y WhatsApp',
        'No aplica en tiendas',
        'No aplica descuento de primera compra',
        'No aplica con otras promociones y/o descuentos.',
        'No aplica descuento de colaboradores.',
        'No aplica meses sin intereses.',
        'Nota: Los descuentos se verán reflejados en siman.com y de ser detectados precios incorrectos que perjudiquen el evento se hará la corrección inmediata, esto puede afectar tu pedido.'
        
    ];
    const frasesDobleSalto=[
        'Consulta más detalles en nuestro call center: 2505-3333',
        'Consulta más detalles en nuestro call center: 2444-7777',
        'Consulta más detalles en nuestro call center: 2264-8080',
        'Consulta más detalles en nuestro call center: 2298-3777'
    ]

    sinEspaciosExtra = sinEspaciosExtra.replace(new RegExp(fecha.value, 'g'), ( '\n\n**' + fecha.value + '**\n' ));
    frases.forEach(frase => {
        sinEspaciosExtra = sinEspaciosExtra.replace(new RegExp(frase, 'g'), ( '\n' + frase));
       


        
      });

    frasesDobleSalto.forEach(fraseDobleSalto => {
        sinEspaciosExtra = sinEspaciosExtra.replace(new RegExp(fraseDobleSalto, 'g'), ( '\n' + fraseDobleSalto + '\n\n'));
      });  

    
    


      const condicionesFormateadas = document.getElementById('condicionesFormateadas');

      condicionesFormateadas.value = sinEspaciosExtra;

      

    
})

document.getElementById('copyButton').addEventListener('click', function() {
    const textBox = document.getElementById('condicionesFormateadas');
    
    navigator.clipboard.writeText(textBox.value).then(function() {
        alert('condiciones copiadas al portapapeles');
    }).catch(function(err) {
        console.error('Error al copiar texto: ', err);
    });
});