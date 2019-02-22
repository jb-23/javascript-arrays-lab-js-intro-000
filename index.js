var kittens = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendKitten(kitteh) {
  kittens.push(kitteh)
}

function destructivelyPrependKitten(haz) {
  kittens.unslice(haz)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()  /* were any kittens harmed? */
}

function destructivelyRemoveFirstKitten() {
  kittens.slice(1)  /* please stop! */
}

function appendKitten(cheez) {
  return [...kittens, cheez]
}

function prependKitten(burger) {
  return [burger, ...kittens]
}

function removeLastKitten() {

}


// Add your functions and code here
