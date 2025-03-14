class SortedList {
  constructor()
{
  this.items = [];
  this.length = 0;

}

  add(item) {
    this.items.push(item)
    this.items.sort ((a, b) => a - b)
    this.length++
  }

  

  get(pos) {
   /*  if ( pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  } */

  if ( this.items[pos] ) {
    return this.items[pos]
  } else {
    throw new Error("OutOfBounds");
  }
  }

  max() {
    if ( this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
    
  }

  min() {
    if ( this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
    
  }

  sum() {
    if (this.items.length === 0) {
      return 0 ;
  }
  return this.items.reduce((a, b) => a + b, 0);
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }



}

module.exports = SortedList;
