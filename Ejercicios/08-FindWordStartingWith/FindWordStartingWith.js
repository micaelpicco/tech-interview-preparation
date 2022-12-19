function FindWordStartingWith(book, query) {
  // Your code here:
  let text = book.text.toLowerCase().split('');
  query = query.split('');
  console.log(query);
  console.log(text);
  console.log(text[57], text[58]);
  return text.reduce((ac, el, index) => {
    if (el === query[0]) {
      if (index > 1 && text[index - 1] !== ' ') return ac;
      for (let i = 1; i < query.length; i++) {
        if (text[index + i] !== query[i]) return ac;
      }
      ac.push(index);
      // console.log(ac);
      return ac;
    } else return ac;
  }, []);
}

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas',
};
console.log(FindWordStartingWith(book, 'de'));
console.log(FindWordStartingWith(book, 'un'));
console.log(FindWordStartingWith(book, 'franco'));
console.log(FindWordStartingWith(book, 'era'));

module.exports = FindWordStartingWith;
