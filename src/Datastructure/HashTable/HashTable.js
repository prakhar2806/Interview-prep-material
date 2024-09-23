// Objects is a special implementation of hash table
//however object class has its own keys which could get overriddin by user

//Hash tables are typically used for constant time lookup and insertion are required
//E.g. Database Indexing, Caches

//Hash Table Implementation (set, get, delete, hashing function to convert key to a numeric index )

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  //hashing function should be complex so that for every key of type string, hashing function should produce only one index of type number
  //e.g. "name" key to  0th index or "address" key to 1st index
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
    //above statement makes sure that the total value remains below the size of array i.e. 0-49
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value; // simple implementation (not considering collision)
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
				//override the value if key is same
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index]; // simple implementation (not considering collision)

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined; // simple implementation (not considering collision)

		const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }

  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("address", "batcave");
table.set("profession", "Batman");
table.display();

console.log(table.get("profession"));

table.remove("name");

table.set("saddres", "Gotham");
// this will cause collision (override) i.e. for same index there are multiple key,value pair
// since charcodeat for address and saddres will be same 

table.display();

//to tackle collision we can store two arrays at one index

// name    ---> [ hash function ] ---> 00 index ---> [name, Bruce]
// address ---> [ hash function ] ---> 25 index ---> [[address, batcave][saddres, gotham]]
// saddres ---> [ hash function ] ---> 25 index ---> both address and sadress point to same index i.e. 25


//Time complexiy is LINEAR and Average