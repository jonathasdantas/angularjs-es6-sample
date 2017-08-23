/**
 * Filter for object based on input fields
 */
const ObjectFilter = () => {
  return (input, search, fields, fromStart = false) => {
    if (!input) {
      return input;
    }
    
    if (!search) {
      return input;
    }

    let expected = ('' + search).toLowerCase();
    let result = {};

    angular.forEach(input, (value, key) => {
      let actual = ('' + value).toLowerCase();

      if (typeof value === 'object') {
        actual = '';

        angular.forEach(value, (v, k) => {
          if (!fields || fields[k]) {
            actual = actual + ' ' + v;
          }
        });

        actual = actual.toLowerCase();
      }

      if (actual.indexOf(expected) !== -1) {
        result[key] = value;
      }

    });

    return result;
  }
};

export default ObjectFilter;
