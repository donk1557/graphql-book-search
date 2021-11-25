const { Thought } = require('../models');

const resolvers = {
  Query: {
    thoughts: async () => {
      return User.find().sort({ createdAt: -1 });
    },

    me: async (user, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {

  },
};

module.exports = resolvers;