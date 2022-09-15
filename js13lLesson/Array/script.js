function alertName(text) {
  alert(text);
}

function consolName(text) {
  console.log(text);
}

function coreFunction(name, upCase) {
  upCase(name.charAt(0).toUpperCase() + name.slice(1));
}

coreFunction("grigorijus", consolName);
