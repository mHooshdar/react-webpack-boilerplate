const incstr = require('incstr');

const createUniqueIdGenerator = () => {
  const index = {};

  const generateNextId = incstr.idGenerator({
    // Removed "d" letter to avoid accidental "ad" construct.
    // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
    alphabet: 'abcefghijklmnopqrstuvwxyz',
  });

  return (name) => {
    if (index[name]) {
      return index[name];
    }

    index[name] = generateNextId();

    return index[name];
  };
};

const uniqueIdGenerator = createUniqueIdGenerator();

const generateScopedName = (localName, componentPath) => {
  const reactComponentName = componentPath.split('/').slice(-1)
  return uniqueIdGenerator(reactComponentName) + '_' + uniqueIdGenerator(localName);
};

const generateGlobalName = (localName) => {
  return uniqueIdGenerator(localName);
};

module.exports = { generateScopedName, generateGlobalName}