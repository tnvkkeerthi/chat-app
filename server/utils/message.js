// var generateMessage = new function(from, text){
//     return {
//         from,
//         text,
//         createdAt : new Date().getTime()
//     };
// };

// module.exports = generateMessage;

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage};
