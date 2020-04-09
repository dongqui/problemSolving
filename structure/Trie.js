function Trie() {
  this.head = {};
}

Trie.prototype.add = function(word) {
  let cur = this.head;
  for (const char of word) {
    if (!cur[char]) {
      cur[char] = {};
    }
    cur = cur[char];
  }
  cur['*'] = true;
}

Trie.prototype.search = function(word) {
  let cur = this.head;
  for (const char of word) {
    if (!cur[char]) return false;
    cur = cur[char];
  }
  return true;
  
}

const t = new Trie();
t.add('hello');
t.add('hi');
console.log(t.search('sadf'));
console.log(t.search('hello'));
console.log(t.search('hi'));
console.log(t.search('h'));
console.log(t.search('hd'));
