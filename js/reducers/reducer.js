import SearchEngine from "../search.js";
import store from "../store";
import suggestionSelector from '../selectors/selector.js';

export default function reducer(state={data:{}}, action){
  switch(action.type){
    case "FETCH_DATA_X":
      console.log("fetching");
      //let data="test";
      return {...state};
    break;
    case "FETCHED_DATA":

      console.log("TEST", action);
      let trieFodder = _.reduce(action.payload,function(accumulator,element,index,collection){
        let channels = _.map(element.channels, function(channel, channelIndex){
          return {
            dataIndex: index,
            words: [channel.description, channel.name]
          }
        });
        let keywords = _.map([element.name], function(keyword, keyWordIndex){
          return {
            dataIndex: index,
            words: keyword
          }
        });
        let tags = _.map(element.tags, function(tag, tagIndex){
          return {
            dataIndex: index,
            words: tag.name
          };
        });
        accumulator.channels.push(...channels);
        accumulator.keywords.push(...keywords);
        accumulator.tags.push(...tags);
        return accumulator
      },{channels:[], keywords: [], tags: []});

      const tagTrie = new SearchEngine();
      const channelTrie = new SearchEngine();
      const keywordsTrie = new SearchEngine();
      trieFodder.channels.forEach(function(channel){
        let arr = channel.words;
        arr.forEach(function(word){channelTrie.addWord(word, channel.dataIndex);});
      });
      trieFodder.keywords.forEach(function(keyword){
        let arr = keyword.words;
        keywordsTrie.addWord(arr, keyword.dataIndex);
      });
      trieFodder.tags.forEach(function(tag){
        let arr = tag.words;
        tagTrie.addWord(arr, tag.dataIndex);
      });

      return { ...state, data: action.payload, tagTrie: tagTrie, channelTrie: channelTrie, keywordsTrie: keywordsTrie};
      break;
    case "SEARCH_UPDATED":
      var query = action.payload;
      return {...state, query};
      break;
      case "UPDATE_QUERY":

      const suggestions = suggestionSelector(state);

      return {...state, query: action.payload, suggestions: suggestions};
      break;
      case "OPTION_SELECTED":
        let result = action.payload.map(index => state.data[index]);
        return {...state, result: result};
      break;
      case "GO_LIVE":
        return {...state, live: action.payload};
      break;
  }
}
