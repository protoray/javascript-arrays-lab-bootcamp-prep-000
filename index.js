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
  
}

function removeFirstKitten()
{
  
}







