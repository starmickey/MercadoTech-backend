const Models = require("../models");

const find = async (modelDb, queryObj) => Models[modelDb].find(queryObj).exec();

const findOne = async (modelDb, queryObj) => Models[modelDb].findOne(queryObj).exec();

const findOneAndSelect = async (
  modelDb,
  queryObj,
  selectQuery,
) => Models[modelDb].findOne(queryObj).select(selectQuery).exec();

const insertNewDocument = async (modelDb, storeObj) => {
  const data = new Models[modelDb](storeObj);
  return data.save();
};

const updateDocument = async (modelDb, updateQuery, setQuery) => Models[modelDb].findOneAndUpdate(
  updateQuery,
  { $set: setQuery },
  { new: true },
);

const customUpdate = async (
  modelDb,
  updateQuery,
  setQuery,
) => Models[modelDb].updateOne(updateQuery, setQuery);

const pushIntoArray = async (
  modelDb,
  updateQuery,
  setQuery,
) => Models[modelDb].findOneAndUpdate(
  updateQuery,
  { $addToSet: setQuery },
  { new: true },
);

const deleteDocument = async (modelDb, deleteQuery) => Models[modelDb].deleteOne(deleteQuery);

const findOneAndPopulate = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery,
) => Models[modelDb]
  .findOne(searchQuery)
  .populate({ path: populateQuery, select: selectQuery })
  .lean();

const findAndPopulate = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery,
) => Models[modelDb]
  .find(searchQuery)
  .populate({ path: populateQuery, select: selectQuery })
  .lean();

const findPopulateSortAndLimit = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery,
  sortedBy,
  skip,
  limit,
) => Models[modelDb]
  .find(searchQuery)
  .populate({ path: populateQuery, select: selectQuery })
  .sort(sortedBy)
  .skip(skip)
  .limit(limit)
  .lean();

const findSliceAndPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populateQuery,
  selectQuery,
) => Models[modelDb]
  .find(searchQuery, sliceQuery)
  .populate({ path: populateQuery, select: selectQuery })
  .lean();

const findAndPopulateNested = async (
  modelDb,
  searchQuery,
  populate,
) => Models[modelDb].find(searchQuery).populate(populate).lean();

const findPopulateNestedSortAndLimit = async (
  modelDb,
  searchQuery,
  populate,
  sortedBy,
  skip,
  limit,
) => Models[modelDb]
  .find(searchQuery)
  .populate(populate)
  .sort(sortedBy)
  .skip(skip)
  .limit(limit)
  .lean();

const findSliceAndPopulateNested = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populate,
) => Models[modelDb].find(searchQuery, sliceQuery).populate(populate).lean();

const getAggregate = async (
  modelDb,
  aggregateQuery,
) => Models[modelDb].aggregate(aggregateQuery);

const findOneSliceAndPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populateQuery,
  selectQuery,
) => Models[modelDb]
  .findOne(searchQuery, sliceQuery)
  .populate({ path: populateQuery, select: selectQuery })
  .lean();

const findOneSliceAndCustomPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  customQuery,
) => Models[modelDb]
  .findOne(searchQuery, sliceQuery)
  .populate(customQuery)
  .lean();

const getDataWithLimit = async (
  modelDb,
  searchQuery,
  sortedBy,
  skip,
  limit,
) => Models[modelDb]
  .find(searchQuery)
  .sort(sortedBy)
  .skip(skip)
  .limit(limit)
  .exec();

const getDataSelectWithLimit = async (
  modelDb,
  searchQuery,
  selectQuery,
  sortedBy,
  skip,
  limit,
) => Models[modelDb]
  .find(searchQuery)
  .select(selectQuery)
  .sort(sortedBy)
  .skip(skip)
  .limit(limit)
  .exec();

const countDocuments = async (
  modelDb,
  filter,
) => Models[modelDb].countDocuments(filter);

module.exports = {
  find,
  findOne,
  insertNewDocument,
  updateDocument,
  deleteDocument,
  findOneAndPopulate,
  findAndPopulate,
  pushIntoArray,
  findAndPopulateNested,
  customUpdate,
  getAggregate,
  findOneSliceAndPopulate,
  findOneSliceAndCustomPopulate,
  getDataWithLimit,
  getDataSelectWithLimit,
  findSliceAndPopulateNested,
  findPopulateNestedSortAndLimit,
  findSliceAndPopulate,
  findOneAndSelect,
  findPopulateSortAndLimit,
  countDocuments,
};
