export default (function (counter) {
  return function getUniqueId(prefix: string = ''): string {
    return `${prefix}${counter++}`;
  };
})(0);
