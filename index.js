const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}

function appendKitten(name)
{
    
    var kittenAppend = [...kittens, name];
    return kittenAppend;
}

function prependKitten(name)
{
  var kittenPrepend = [name, ...kittens];
  return kittenPrepend;
}

function removeLastKitten()
{
  var removedKittenLast = kittens.slice(kittens.length - 1)
  return kittens;
}

function removeFirstKitten()
{
  var removedKittenFirst = kittens.slice(1);
  return removedKittenFirst;
}







