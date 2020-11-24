let CreditCalc = function ($) {
   'use strict';
   const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }
   let calc = function () {
      let summFormat = $('.credits #summ').val(),//Сумма отформатированная
         summ = Number.parseInt( //Сумма без форматирования
            summFormat.replace(/\s/g, '')
         ),
         term = Number.parseInt($('.credits #term').val()),//срок
         commission = 0,//Комиссия
         persent = 0.01,//думаю, можно менять в зависмости от срок займа
         cresitSumm = summ + (summ / 100 * persent) * term,//Сумма возврата без форматирования
         cresitSummFormat = numberWithCommas(Math.round(cresitSumm));//Сумма возврата отформатированная
      persent = numberWithCommas(persent);

      $('.credits .get__sum').text(summFormat);
      $('.credits .return__sum').text(cresitSummFormat);
      $('.credits .rate__sum').text(persent + '%');

   }
   let slide = function (obj) {
      let input = obj.find('input'),
         k = parseInt(input.attr('data-k')),
         min = parseFloat(input.attr('data-min')) * k,
         max = parseFloat(input.attr('data-max')) * k,
         step = parseFloat(input.attr('data-step')) * k,
         val = parseFloat(input.val()) * k;
      input.val(numberWithCommas(input.val()));
      input.keyup(function () {
         var val = $(this).val();
         val = val.replace(/\s+/g, "");
         val = val.replace(/,/g, ".");

         $(this).val(numberWithCommas(val));
         if (val == '')
            val = 0;
         else
            val = parseFloat(val) * k;

         $(this).closest('.range').find('.slider').slider({ value: val });
      });
      obj.find(".slider").slider({
         min: min,
         max: max,
         step: step,
         range: "min",
         value: val,
         slide: function (event, ui) {
            var k = parseInt(input.attr('data-k'));
            var val = parseFloat(ui.value) / k;
            input.val(numberWithCommas(val));
         },
         change: function (event, ui) {
            calc();
         }
      });
   }
   let initialisation = function () {
      $('.range').each(function (obj, i) {
         slide($(this));
      });
      calc();
   };
   return {
      init: function () {
         initialisation();
      },
   }
}(jQuery);
jQuery(document).ready(function ($) {
   CreditCalc.init();
});
