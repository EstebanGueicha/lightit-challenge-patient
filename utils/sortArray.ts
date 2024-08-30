export const sortArrayBy = (items: any[], by: string, orderBy: boolean) => {
  return items.sort((a, b) => {
    const aValue = a[by];
    const bValue = b[by];

    if (aValue == null && bValue == null) {
      return 0;
    }

    if (aValue == null) {
      return orderBy ? 1 : -1;
    }

    if (bValue == null) {
      return orderBy ? -1 : 1;
    }

    if (orderBy) {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });
};
