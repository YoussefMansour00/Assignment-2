var quotes = [`<p>“So many books, so little time.”</p><p>
― Frank Zappa</p>`,`<p>“Be yourself; everyone else is already taken.”</p><p>
― Oscar Wilde</p>`,`<p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p><p>
― Marilyn Monroe</p>`,`<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p><p>
― Albert Einstein</p>`,`<p>“A room without books is like a body without a soul.”</p><p>
― Marcus Tullius Cicero</p>`,`<p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p><p>
― Bernard M. Baruch</p>`,`<p>“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”</p><p>
― William W. Purkey</p>`,`<p>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</p><p>
― Dr. Seuss</p>`,`<p>“You only live once, but if you do it right, once is enough.”</p><p>
― Mae West</p>`,`<p>“Be the change that you wish to see in the world.”</p><p>
― Mahatma Gandhi</p>`]
function getquote(){
    var display = quotes[Math.floor(Math.random()*10)];
    console.log(display);
    console.log(Math.floor(Math.random()*10));
    document.getElementById('Quote_display').innerHTML=display;
};
