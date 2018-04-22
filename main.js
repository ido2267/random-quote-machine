$(document).ready(function () {

    var qoute, author;

    function getNewQuote() {
        var x = document.getElementsByClassName("quote-box");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor =   getNewColor();
        } 
      
        $.ajax
            ({
                url: 'https://api.forismatic.com/api/1.0/',
                jsonp: 'jsonp',
                dataType: 'jsonp',
                data: {
                    method: 'getQuote',
                    format: 'jsonp',
                    lang: 'en'
                },
                success: function (response) {
                    // console.log(response.quoteText); 
                    quote = response.quoteText;
                    author = response.quoteAuthor;
                    //      $(#quote).text(quote);
                    document.getElementById('quote').innerHTML = quote;

                    if (author) {
                        //$(#author).text('Author:' + author)
                        document.getElementById('author').innerHTML = author;
                    }
                    else {
                        document.getElementById('author').innerHTML = 'Author unknown';
                        //    $(#author).text('Author unknown'); 
                    }
                }
            });
    }
    getNewQuote();
    $('.get-quote').on('click', function (event) {
        event.preventDefault();
        getNewQuote();

    });
    $('.share-quote').on('click', function (even) {
        event.preventDefault();
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + ' -- ' + author));
    }
    )

    function getNewColor() {
        var colorRange1 = Math.floor((Math.random() * 55) + 200);
        var colorRange2 = Math.floor((Math.random() * 55) + 200);
        var colorRange3 = Math.floor((Math.random() * 55) + 200);
        var randomColor = 'rgb(' + colorRange1 + ',' +colorRange2 + ',' +colorRange3 + ')'
       return randomColor;
    }

});