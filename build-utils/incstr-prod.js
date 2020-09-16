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

const uniqueModuleFileIdGenerator = createUniqueIdGenerator();
const uniqueModuleIdGenerator = createUniqueIdGenerator();
const uniqueGlobalIdGenerator = createUniqueIdGenerator();

const generateScopedName = (localName, componentPath) => {
  // const reactComponentName = componentPath.split('/').slice(-1)
  return uniqueModuleFileIdGenerator(componentPath) + '_' + uniqueModuleIdGenerator(localName);
};

const generateGlobalName = (localName) => uniqueGlobalIdGenerator(localName);

module.exports = { generateScopedName, generateGlobalName}