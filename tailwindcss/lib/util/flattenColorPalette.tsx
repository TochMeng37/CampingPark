function flattenColorPalette(colors: any): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  function recurse(current: any, prefix: string = '') {
    if (typeof current !== 'object' || current === null) {
      // Handle non-object values
      return;
    }

    Object.entries(current).forEach(([key, value]) => {
      const newPrefix = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        recurse(value, newPrefix);
      } else if (typeof value === 'string') {
        // Ensure value is a string before assigning to result
        result[newPrefix] = value;
      } else if (Array.isArray(value)) {
        // Handle array values if necessary
        value.forEach((item, index) => {
          if (typeof item === 'string') {
            result[`${newPrefix}-${index}`] = item;
          }
        });
      }
    });
  }

  recurse(colors);
  return result;
}
