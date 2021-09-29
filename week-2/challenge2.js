const dataChecker = function (str, rank) {
  if (str === 'codenation' && rank === 1)
    return console.log(`${str} ranked number ${rank}, good choice!`);
  else if (str === 'codenation')
    return console.log(`What, ${str} only ranked number ${rank}??`);
  else
    return console.log(
      `What? ${str} ranked number ${rank}, are you even playing this game?`
    );
};

dataChecker('codenation', 1);
dataChecker('codenation', 2);
dataChecker('apple pie', 1);
