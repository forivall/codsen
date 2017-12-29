/* eslint prefer-destructuring:0 */

import sortRanges from 'ranges-sort'

// merges the overlapping ranges
// case #1. exact extension:
// [ [1, 5], [5, 10] ] => [ [1, 10] ]
// case #2. overlap:
// [ [1, 4], [3, 5] ] => [ [1, 5] ]
function mergeRanges(arrOfRanges) {
  if (!Array.isArray(arrOfRanges)) {
    return arrOfRanges
  }
  const sortedRanges = sortRanges(arrOfRanges)
  for (let i = sortedRanges.length - 1; i > 0; i--) {
    if (
      (sortedRanges[i][0] <= sortedRanges[i - 1][0]) ||
      (sortedRanges[i][0] <= sortedRanges[i - 1][1])
    ) {
      sortedRanges[i - 1][0] = Math.min(sortedRanges[i][0], sortedRanges[i - 1][0])
      sortedRanges[i - 1][1] = Math.max(sortedRanges[i][1], sortedRanges[i - 1][1])

      if (
        (
          sortedRanges[i][2] !== undefined
        ) &&
        (
          (sortedRanges[i - 1][0] >= sortedRanges[i][0]) ||
          (sortedRanges[i - 1][1] <= sortedRanges[i][1])
        )
      ) {
        if (sortedRanges[i - 1][2] !== null) {
          if ((sortedRanges[i][2] === null) && (sortedRanges[i - 1][2] !== null)) {
            sortedRanges[i - 1][2] = null
          } else if (sortedRanges[i - 1][2] !== undefined) {
            sortedRanges[i - 1][2] += sortedRanges[i][2]
          } else {
            sortedRanges[i - 1][2] = sortedRanges[i][2]
          }
        }
      }
      sortedRanges.splice(i, 1)
      // reset the traversal, start from the end again
      i = sortedRanges.length
    }
  }
  return sortedRanges
}

export default mergeRanges
