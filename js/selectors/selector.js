import { createSelector } from "reselect";

const dataSelector = state => state.data;
const querySelector = state => state.query;
const channelTrie = state => state.channelTrie;
const tagTrie = state => state.tagTrie;
const keywordsTrie = state => state.keywordsTrie;

const getFilteredData = (data, query, channelTrie, tagTrie, keywordsTrie) => {
  const channels = channelTrie.search(query);
  const tags = tagTrie.search(query);
  const keywords = keywordsTrie.search(query);
  let filteredData = [...channels, ...tags, ...keywords];

  return filteredData;
}

export default createSelector(
  dataSelector,
  querySelector,
  channelTrie,
  tagTrie,
  keywordsTrie,
  getFilteredData
);
