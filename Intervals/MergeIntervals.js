/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
      if (intervals.length < 2){
        return intervals
      }
      let merged = [intervals[0]];
      for (let i = 1; i< intervals.length; i++){
          let end = merged.length - 1
          if (merged[end][1] >= intervals[i][0]){
            merged[end][1] = Math.max(merged[end][1], intervals[i][1])
          } else {
            merged.push(intervals[i])
          }
      }
      return merged
};