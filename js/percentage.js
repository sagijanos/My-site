var displayJs = $('.countPercentageJs > span');

    var currentValue = parseInt(displayJs.text());
    var nextValue    = 60;

    var diff         = nextValue - currentValue;
    var step         = ( 0 < diff ? 1 : -1 ); 

    for (var i = 0; i < Math.abs(diff); ++i) {
        setTimeout(function() {
            currentValue += step
            displayJs.text(currentValue);
        }, 70 * i )   
    }


var displayHtml = $('.countPercentageHtml > span');

    var valueOf = parseInt(displayHtml.text());
    var nearValue    = 80;

    var feed         = nearValue - valueOf;
    var next         = ( 0 < feed ? 1 : -1 ); 

    for (var i = 0; i < Math.abs(feed); ++i) {
        setTimeout(function() {
            valueOf += next
            displayHtml.text(valueOf);
        }, 80 * i )   
    }

    var displayCss = $('.countPercentageCss > span');

    var currentCss = parseInt(displayCss.text());
    var nearCss    = 75;

    var cssDiff        = nearCss - currentCss;
    var cssStep        = ( 0 < cssDiff ? 1 : -1 ); 

    for (var i = 0; i < Math.abs(cssDiff); ++i) {
        setTimeout(function() {
            currentCss += cssStep
            displayCss.text(currentCss);
        }, 90 * i )   
    }


 var displayTrap = $('.countPercentageTrap > span');

    var currentTrap = parseInt(displayTrap.text());
    var nearTrap    = 70;

    var trapDiff        = nearTrap - currentTrap;
    var trapStep        = ( 0 < trapDiff ? 1 : -1 ); 

    for (var i = 0; i < Math.abs(trapDiff); ++i) {
        setTimeout(function() {
            currentTrap += trapStep
            displayTrap.text(currentTrap);
        }, 130 * i )   
    }