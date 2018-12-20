jQuery(document).ready(function(){
    $('#conversion_to_centimeter').on('submit', function(evt){
        evt.preventDefault();
        var $inch = $('#inch');
        var inch = $inch.val();
        var conversionOptionValue=$("#conversion_option").val();
        axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
         conversionValue=result.data[conversionOptionValue];
        var total = parseFloat(inch*conversionValue);
        $('#total').html(total);
        console.log(total);
          
    });
});

         $('#conversion_to_inches').on('submit', function(evt){
        evt.preventDefault();
            var $cent = $('#cent');
            var cent = $cent.val();
            var conversionOptionValue2=$("#conversion_option2").val();
            axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
             conversionValue2=result.data[conversionOptionValue2];
            var total1 = parseFloat(cent*conversionValue2);
            $('#total1').html(total1);
            console.log(total1);

        });
    });
  
    
});