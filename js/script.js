 $(document).ready(function () {


     function autoCalcSetup() {
         $('form[name=cart]').jAutoCalc('destroy');
         $('form[name=cart] tr[name=line_items]').jAutoCalc({
             keyEventsFire: true,
             decimalPlaces: 2,
             emptyAsZero: true
         });
         $('form[name=cart]').jAutoCalc({
             decimalPlaces: 2
         });
     }
     autoCalcSetup();

     //Remove Item
     $('button[name=remove]').click(function (e) {
         e.preventDefault();

         var form = $(this).parents('form')
         $(this).parents('tr').remove();
         autoCalcSetup();

     });

     //Insert Item
     $('button[name=add]').click(function (e) {
         e.preventDefault();

         var $table = $(this).parents('table');
         var $bottom = $table.find('tr[name=line_items]').last();
         var $new = $bottom.clone(true);

         $new.jAutoCalc('destroy');
         $new.insertAfter($bottom);
         $new.find('input[type=text]').val('');
         autoCalcSetup();

     });

 });
