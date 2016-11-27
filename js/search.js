import _ from 'lodash'

class TrieNode {
  constructor(letter){
    this.letter = letter;
    this.children = ['$'];
    this.isLastNode = false;
    this.index = [];
  }
}
export default class Search {
  constructor(){
    this.trieRoot = new TrieNode('$');
  }

  addWord(word, index){
    let wordArray = word.split('');
    let cNode = this.trieRoot;
    while(wordArray.length > 0){
      let poppedLetter = wordArray.shift();
      _.each(cNode.children, function(v, k){
        if(v === '$'){
          cNode.children.pop();
          let newNode = new TrieNode(poppedLetter.toLowerCase());
          cNode.children.push(newNode);
          cNode = newNode;
          return false;
        }
        if(v.letter.toLowerCase() === poppedLetter.toLowerCase()){
          cNode = v;
          return false;
        }
        if(k === cNode.children.length - 1){
          var newNode = new TrieNode(poppedLetter.toLowerCase());
          cNode.children.push(newNode);
          cNode = newNode;
        }
      });
    }
    cNode._word = word;
    cNode.isLastNode = true;
    if(cNode.index.indexOf(index) === -1){
        cNode.index.push(index);
    }
  }

  search(word){
    let wordArray = word.split('');
    let cNode = this.trieRoot;
    let resultArr = [];
    let processedLetters = [];
    while(wordArray.length > 0){
      let poppedLetter = wordArray.shift();
      _.each(cNode.children, function(v, k){
        if(v.letter.toLowerCase() === poppedLetter.toLowerCase()){
          cNode = v;
          processedLetters.push(poppedLetter);
          return false;
        }
      });
    }
    if(cNode.letter === '$' || processedLetters.length !== word.length) return [];
    let queue = _.map(cNode.children, function(v){return v;});
    let curWord = word.slice(0, word.length);
    if(cNode.isLastNode){
      resultArr.push({word: cNode._word, index: cNode.index});
      return resultArr;
    }
    while(queue.length > 0){
      let node = queue.pop();
      curWord += node.letter;
      if(node.isLastNode){
        resultArr.push({word: node._word, index: node.index});
      }
      if(node.children[0] !== '$'){
        _.each(node.children, function(child, key){
          queue.push(child);
        });
      }
    }
    return resultArr;
  }
}
