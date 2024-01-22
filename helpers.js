
/** returns a randomly selected item from array of items */
function choice(itemsArr) {
  return itemsArr[Math.floor(Math.random() * itemsArr.length)];
}

/** removes the first matching item from items, if item exists, and returns it. 
 * 
 * Otherwise returns undefined */
function remove(items, item){
  const index = items.indexOf(item);
  if (index !== -1) return items.splice(index, 1)[0];
  return undefined;
}


export { choice, remove };