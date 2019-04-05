/* 
  Write a function that get a string as argument
  and returns the first recurring character
  'ABCA' => 'A'
  'ABCBA' => 'B'
  'ABC' => null
*/

const tests = [
  'ABCA',
  'ABCBA',
  'ABC',
  'ahsudhjdoas',
  'dfu2dqxhe1qwusdhq'
]

const getFirstRecurringChar = given_string => {
  const recurring = []

  for (let char of given_string) {
    let index =  recurring.indexOf(char)
    if (index !== -1) {
      return char
    }
    recurring.push(char)
  }

  return null
}

tests.forEach(test => console.log(getFirstRecurringChar(test)))