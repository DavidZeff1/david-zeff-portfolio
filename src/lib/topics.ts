const topics: Record<
  string,
  {
    name: string;
    easy: { name: string; url: string }[];
    medium: { name: string; url: string }[];
    hard: { name: string; url: string }[];
  }
> = {
  arrays: {
    name: "Arrays & Hashing",
    easy: [
      { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
      {
        name: "Contains Duplicate",
        url: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        name: "Valid Anagram",
        url: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        name: "Two Sum II - Input Array Is Sorted",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        name: "Majority Element",
        url: "https://leetcode.com/problems/majority-element/",
      },
      {
        name: "Remove Duplicates from Sorted Array",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        name: "Remove Element",
        url: "https://leetcode.com/problems/remove-element/",
      },
      {
        name: "Search Insert Position",
        url: "https://leetcode.com/problems/search-insert-position/",
      },
      { name: "Plus One", url: "https://leetcode.com/problems/plus-one/" },
      {
        name: "Merge Sorted Array",
        url: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        name: "Pascal's Triangle",
        url: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        name: "Pascal's Triangle II",
        url: "https://leetcode.com/problems/pascals-triangle-ii/",
      },
      {
        name: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        name: "Single Number",
        url: "https://leetcode.com/problems/single-number/",
      },
      {
        name: "Intersection of Two Arrays",
        url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        name: "Intersection of Two Arrays II",
        url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        name: "Missing Number",
        url: "https://leetcode.com/problems/missing-number/",
      },
      {
        name: "Move Zeroes",
        url: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        name: "Third Maximum Number",
        url: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        name: "Find All Numbers Disappeared in an Array",
        url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
      },
      {
        name: "Max Consecutive Ones",
        url: "https://leetcode.com/problems/max-consecutive-ones/",
      },
      {
        name: "Keyboard Row",
        url: "https://leetcode.com/problems/keyboard-row/",
      },
      {
        name: "Find All Duplicates in an Array",
        url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        name: "Set Mismatch",
        url: "https://leetcode.com/problems/set-mismatch/",
      },
      {
        name: "Degree of an Array",
        url: "https://leetcode.com/problems/degree-of-an-array/",
      },
      {
        name: "1-bit and 2-bit Characters",
        url: "https://leetcode.com/problems/1-bit-and-2-bit-characters/",
      },
      {
        name: "Find Pivot Index",
        url: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        name: "Largest Number At Least Twice of Others",
        url: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/",
      },
      {
        name: "Toeplitz Matrix",
        url: "https://leetcode.com/problems/toeplitz-matrix/",
      },
      {
        name: "Positions of Large Groups",
        url: "https://leetcode.com/problems/positions-of-large-groups/",
      },
      {
        name: "Flipping an Image",
        url: "https://leetcode.com/problems/flipping-an-image/",
      },
      {
        name: "Magic Squares In Grid",
        url: "https://leetcode.com/problems/magic-squares-in-grid/",
      },
      {
        name: "Monotonic Array",
        url: "https://leetcode.com/problems/monotonic-array/",
      },
      {
        name: "Sort Array By Parity",
        url: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        name: "Sort Array By Parity II",
        url: "https://leetcode.com/problems/sort-array-by-parity-ii/",
      },
      {
        name: "Squares of a Sorted Array",
        url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        name: "N-Repeated Element in Size 2N Array",
        url: "https://leetcode.com/problems/n-repeated-element-in-size-2n-array/",
      },
      {
        name: "Unique Email Addresses",
        url: "https://leetcode.com/problems/unique-email-addresses/",
      },
      {
        name: "Height Checker",
        url: "https://leetcode.com/problems/height-checker/",
      },
      {
        name: "Relative Sort Array",
        url: "https://leetcode.com/problems/relative-sort-array/",
      },
      {
        name: "Duplicate Zeros",
        url: "https://leetcode.com/problems/duplicate-zeros/",
      },
      {
        name: "Can Make Arithmetic Progression From Sequence",
        url: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",
      },
      {
        name: "Check If N and Its Double Exist",
        url: "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
      },
      {
        name: "Replace Elements with Greatest Element on Right Side",
        url: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
      },
      {
        name: "Find Numbers with Even Number of Digits",
        url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
      },
      {
        name: "Lucky Numbers in a Matrix",
        url: "https://leetcode.com/problems/lucky-numbers-in-a-matrix/",
      },
      {
        name: "Count Negative Numbers in a Sorted Matrix",
        url: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
      },
      {
        name: "How Many Numbers Are Smaller Than the Current Number",
        url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
      },
      {
        name: "Decompress Run-Length Encoded List",
        url: "https://leetcode.com/problems/decompress-run-length-encoded-list/",
      },
      {
        name: "Rank Transform of an Array",
        url: "https://leetcode.com/problems/rank-transform-of-an-array/",
      },
      {
        name: "Element Appearing More Than 25% In Sorted Array",
        url: "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/",
      },
      {
        name: "Find Lucky Integer in an Array",
        url: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
      },
      {
        name: "Kids With the Greatest Number of Candies",
        url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
      },
      {
        name: "Create Target Array in the Given Order",
        url: "https://leetcode.com/problems/create-target-array-in-the-given-order/",
      },
      {
        name: "Running Sum of 1d Array",
        url: "https://leetcode.com/problems/running-sum-of-1d-array/",
      },
      {
        name: "XOR Operation in an Array",
        url: "https://leetcode.com/problems/xor-operation-in-an-array/",
      },
      {
        name: "Average Salary Excluding the Minimum and Maximum Salary",
        url: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",
      },
      {
        name: "Shuffle the Array",
        url: "https://leetcode.com/problems/shuffle-the-array/",
      },
      {
        name: "Final Prices With a Special Discount in a Shop",
        url: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
      },
      {
        name: "Number of Good Pairs",
        url: "https://leetcode.com/problems/number-of-good-pairs/",
      },
      {
        name: "Richest Customer Wealth",
        url: "https://leetcode.com/problems/richest-customer-wealth/",
      },
      {
        name: "Matrix Diagonal Sum",
        url: "https://leetcode.com/problems/matrix-diagonal-sum/",
      },
      {
        name: "Count Items Matching a Rule",
        url: "https://leetcode.com/problems/count-items-matching-a-rule/",
      },
      {
        name: "Sum of All Odd Length Subarrays",
        url: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/",
      },
      {
        name: "Maximum Product of Two Elements in an Array",
        url: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",
      },
      {
        name: "Special Array With X Elements Greater Than or Equal X",
        url: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
      },
      {
        name: "Find the Highest Altitude",
        url: "https://leetcode.com/problems/find-the-highest-altitude/",
      },
      {
        name: "Sum of Unique Elements",
        url: "https://leetcode.com/problems/sum-of-unique-elements/",
      },
      {
        name: "Maximum Population Year",
        url: "https://leetcode.com/problems/maximum-population-year/",
      },
      {
        name: "Find the Winner of the Circular Game",
        url: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
      },
      {
        name: "Maximum Number of Balls in a Box",
        url: "https://leetcode.com/problems/maximum-number-of-balls-in-a-box/",
      },
      {
        name: "Sign of the Product of an Array",
        url: "https://leetcode.com/problems/sign-of-the-product-of-an-array/",
      },
      {
        name: "Minimum Operations to Make the Array Increasing",
        url: "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/",
      },
      {
        name: "Check if Array Is Sorted and Rotated",
        url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
      },
      {
        name: "Two Out of Three",
        url: "https://leetcode.com/problems/two-out-of-three/",
      },
      {
        name: "Find Target Indices After Sorting Array",
        url: "https://leetcode.com/problems/find-target-indices-after-sorting-array/",
      },
      {
        name: "Count Equal and Divisible Pairs in an Array",
        url: "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/",
      },
      {
        name: "Minimum Number of Moves to Seat Everyone",
        url: "https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/",
      },
      {
        name: "Find All K-Distant Indices in an Array",
        url: "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",
      },
      {
        name: "Keep Multiplying Found Values by Two",
        url: "https://leetcode.com/problems/keep-multiplying-found-values-by-two/",
      },
      {
        name: "Count Hills and Valleys in an Array",
        url: "https://leetcode.com/problems/count-hills-and-valleys-in-an-array/",
      },
      {
        name: "Merge Similar Items",
        url: "https://leetcode.com/problems/merge-similar-items/",
      },
      {
        name: "Most Frequent Even Element",
        url: "https://leetcode.com/problems/most-frequent-even-element/",
      },
      {
        name: "Find Subarrays With Equal Sum",
        url: "https://leetcode.com/problems/find-subarrays-with-equal-sum/",
      },
      {
        name: "Largest Positive Integer That Exists With Its Negative",
        url: "https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/",
      },
      {
        name: "Number of Arithmetic Triplets",
        url: "https://leetcode.com/problems/number-of-arithmetic-triplets/",
      },
      {
        name: "Make Array Zero by Subtracting Equal Amounts",
        url: "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/",
      },
      {
        name: "Maximum Count of Positive Integer and Negative Integer",
        url: "https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/",
      },
      {
        name: "Left and Right Sum Differences",
        url: "https://leetcode.com/problems/left-and-right-sum-differences/",
      },
      {
        name: "Distinct Difference Array",
        url: "https://leetcode.com/problems/distinct-difference-array/",
      },
    ],
    medium: [
      {
        name: "Group Anagrams",
        url: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        name: "Top K Frequent Elements",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        name: "Product of Array Except Self",
        url: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        name: "Valid Sudoku",
        url: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        name: "Longest Consecutive Sequence",
        url: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        name: "Encode and Decode Strings",
        url: "https://leetcode.com/problems/encode-and-decode-strings/",
      },
      {
        name: "Sort Colors",
        url: "https://leetcode.com/problems/sort-colors/",
      },
      {
        name: "Next Permutation",
        url: "https://leetcode.com/problems/next-permutation/",
      },
      {
        name: "Find the Duplicate Number",
        url: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        name: "Subarray Sum Equals K",
        url: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        name: "Spiral Matrix",
        url: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        name: "Spiral Matrix II",
        url: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        name: "Set Matrix Zeroes",
        url: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        name: "Rotate Image",
        url: "https://leetcode.com/problems/rotate-image/",
      },
      {
        name: "Word Search",
        url: "https://leetcode.com/problems/word-search/",
      },
      { name: "3Sum", url: "https://leetcode.com/problems/3sum/" },
      {
        name: "3Sum Closest",
        url: "https://leetcode.com/problems/3sum-closest/",
      },
      { name: "4Sum", url: "https://leetcode.com/problems/4sum/" },
      {
        name: "Container With Most Water",
        url: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        name: "Search a 2D Matrix",
        url: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        name: "Search a 2D Matrix II",
        url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        name: "Game of Life",
        url: "https://leetcode.com/problems/game-of-life/",
      },
      {
        name: "Insert Delete GetRandom O(1)",
        url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        name: "Shuffle an Array",
        url: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        name: "Find All Duplicates in an Array",
        url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        name: "Majority Element II",
        url: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        name: "Increasing Triplet Subsequence",
        url: "https://leetcode.com/problems/increasing-triplet-subsequence/",
      },
      {
        name: "Largest Number",
        url: "https://leetcode.com/problems/largest-number/",
      },
      {
        name: "Wiggle Sort II",
        url: "https://leetcode.com/problems/wiggle-sort-ii/",
      },
      { name: "H-Index", url: "https://leetcode.com/problems/h-index/" },
      { name: "H-Index II", url: "https://leetcode.com/problems/h-index-ii/" },
      {
        name: "Longest Substring Without Repeating Characters",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        name: "Contiguous Array",
        url: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        name: "Continuous Subarray Sum",
        url: "https://leetcode.com/problems/continuous-subarray-sum/",
      },
      { name: "Brick Wall", url: "https://leetcode.com/problems/brick-wall/" },
      {
        name: "Maximum Size Subarray Sum Equals k",
        url: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
      },
      {
        name: "Range Sum Query 2D - Immutable",
        url: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      },
      {
        name: "Kth Smallest Element in a Sorted Matrix",
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        name: "Find K Pairs with Smallest Sums",
        url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        name: "Pacific Atlantic Water Flow",
        url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        name: "Number of Islands",
        url: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "Max Area of Island",
        url: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        name: "Surrounded Regions",
        url: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        name: "Shortest Bridge",
        url: "https://leetcode.com/problems/shortest-bridge/",
      },
      {
        name: "Find Peak Element",
        url: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        name: "Minimum Path Sum",
        url: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        name: "Unique Paths",
        url: "https://leetcode.com/problems/unique-paths/",
      },
      {
        name: "Unique Paths II",
        url: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        name: "Maximum Product Subarray",
        url: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        name: "Maximum Subarray",
        url: "https://leetcode.com/problems/maximum-subarray/",
      },
      { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
      {
        name: "Jump Game II",
        url: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        name: "Gas Station",
        url: "https://leetcode.com/problems/gas-station/",
      },
      { name: "Candy", url: "https://leetcode.com/problems/candy/" },
      {
        name: "Task Scheduler",
        url: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        name: "Minimum Increment to Make Array Unique",
        url: "https://leetcode.com/problems/minimum-increment-to-make-array-unique/",
      },
      {
        name: "Array Nesting",
        url: "https://leetcode.com/problems/array-nesting/",
      },
      {
        name: "Find the Prefix Common Array of Two Arrays",
        url: "https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/",
      },
      {
        name: "Reveal Cards In Increasing Order",
        url: "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
      },
      {
        name: "Array of Doubled Pairs",
        url: "https://leetcode.com/problems/array-of-doubled-pairs/",
      },
      {
        name: "Maximum Erasure Value",
        url: "https://leetcode.com/problems/maximum-erasure-value/",
      },
      {
        name: "Longest Subarray of 1's After Deleting One Element",
        url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      },
      {
        name: "Subarrays with K Different Integers",
        url: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      },
      {
        name: "Count Number of Nice Subarrays",
        url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
      },
      {
        name: "Grumpy Bookstore Owner",
        url: "https://leetcode.com/problems/grumpy-bookstore-owner/",
      },
      {
        name: "Binary Subarrays With Sum",
        url: "https://leetcode.com/problems/binary-subarrays-with-sum/",
      },
      {
        name: "Fruit Into Baskets",
        url: "https://leetcode.com/problems/fruit-into-baskets/",
      },
    ],
    hard: [
      {
        name: "First Missing Positive",
        url: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        name: "Median of Two Sorted Arrays",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
    ],
  },

  twopointers: {
    name: "Two Pointers",
    easy: [
      {
        name: "Valid Palindrome",
        url: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        name: "Two Sum II - Input Array Is Sorted",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        name: "Merge Sorted Array",
        url: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        name: "Move Zeroes",
        url: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        name: "Remove Duplicates from Sorted Array",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        name: "Remove Element",
        url: "https://leetcode.com/problems/remove-element/",
      },
      {
        name: "Squares of a Sorted Array",
        url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        name: "Reverse String",
        url: "https://leetcode.com/problems/reverse-string/",
      },
      {
        name: "Reverse Vowels of a String",
        url: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
      },
      {
        name: "Is Subsequence",
        url: "https://leetcode.com/problems/is-subsequence/",
      },
      {
        name: "Backspace String Compare",
        url: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        name: "Assign Cookies",
        url: "https://leetcode.com/problems/assign-cookies/",
      },
      {
        name: "Intersection of Two Arrays",
        url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        name: "Intersection of Two Arrays II",
        url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        name: "Long Pressed Name",
        url: "https://leetcode.com/problems/long-pressed-name/",
      },
      {
        name: "Sort Array By Parity",
        url: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        name: "Sort Array By Parity II",
        url: "https://leetcode.com/problems/sort-array-by-parity-ii/",
      },
      {
        name: "Flipping an Image",
        url: "https://leetcode.com/problems/flipping-an-image/",
      },
      {
        name: "Shortest Distance to a Character",
        url: "https://leetcode.com/problems/shortest-distance-to-a-character/",
      },
      {
        name: "DI String Match",
        url: "https://leetcode.com/problems/di-string-match/",
      },
      {
        name: "Valid Palindrome II",
        url: "https://leetcode.com/problems/valid-palindrome-ii/",
      },
      {
        name: "Reverse Only Letters",
        url: "https://leetcode.com/problems/reverse-only-letters/",
      },
      {
        name: "Minimum Common Value",
        url: "https://leetcode.com/problems/minimum-common-value/",
      },
      {
        name: "Find the Index of the First Occurrence in a String",
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
      },
      {
        name: "Merge Strings Alternately",
        url: "https://leetcode.com/problems/merge-strings-alternately/",
      },
      {
        name: "Reverse Prefix of Word",
        url: "https://leetcode.com/problems/reverse-prefix-of-word/",
      },
      {
        name: "Find First Palindromic String in the Array",
        url: "https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",
      },
      {
        name: "Check If Two String Arrays are Equivalent",
        url: "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",
      },
      {
        name: "Maximum Number of Words Found in Sentences",
        url: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
      },
      {
        name: "Reverse Words in a String III",
        url: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
      },
    ],
    medium: [
      { name: "3Sum", url: "https://leetcode.com/problems/3sum/" },
      {
        name: "Container With Most Water",
        url: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        name: "3Sum Closest",
        url: "https://leetcode.com/problems/3sum-closest/",
      },
      { name: "4Sum", url: "https://leetcode.com/problems/4sum/" },
      {
        name: "Remove Nth Node From End of List",
        url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        name: "Sort Colors",
        url: "https://leetcode.com/problems/sort-colors/",
      },
      {
        name: "Rotate List",
        url: "https://leetcode.com/problems/rotate-list/",
      },
      {
        name: "Partition Labels",
        url: "https://leetcode.com/problems/partition-labels/",
      },
      {
        name: "Boats to Save People",
        url: "https://leetcode.com/problems/boats-to-save-people/",
      },
      {
        name: "Longest Word in Dictionary through Deleting",
        url: "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/",
      },
      {
        name: "Remove Duplicates from Sorted Array II",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
      },
      {
        name: "Pancake Sorting",
        url: "https://leetcode.com/problems/pancake-sorting/",
      },
      {
        name: "Push Dominoes",
        url: "https://leetcode.com/problems/push-dominoes/",
      },
      {
        name: "Maximize Distance to Closest Person",
        url: "https://leetcode.com/problems/maximize-distance-to-closest-person/",
      },
      {
        name: "Interval List Intersections",
        url: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        name: "Number of Subsequences That Satisfy the Given Sum Condition",
        url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
      },
      {
        name: "Longest Mountain in Array",
        url: "https://leetcode.com/problems/longest-mountain-in-array/",
      },
      {
        name: "Rotate Array",
        url: "https://leetcode.com/problems/rotate-array/",
      },
      {
        name: "String Compression",
        url: "https://leetcode.com/problems/string-compression/",
      },
      {
        name: "Bag of Tokens",
        url: "https://leetcode.com/problems/bag-of-tokens/",
      },
      {
        name: "Two Sum Less Than K",
        url: "https://leetcode.com/problems/two-sum-less-than-k/",
      },
      {
        name: "Count Pairs Whose Sum is Less than Target",
        url: "https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/",
      },
      {
        name: "Find K Closest Elements",
        url: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        name: "Subarray Product Less Than K",
        url: "https://leetcode.com/problems/subarray-product-less-than-k/",
      },
      {
        name: "Maximum Width Ramp",
        url: "https://leetcode.com/problems/maximum-width-ramp/",
      },
    ],
    hard: [
      {
        name: "Trapping Rain Water",
        url: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        name: "Minimum Window Substring",
        url: "https://leetcode.com/problems/minimum-window-substring/",
      },
    ],
  },

  linkedlist: {
    name: "Linked List",
    easy: [
      {
        name: "Reverse Linked List",
        url: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        name: "Merge Two Sorted Lists",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        name: "Linked List Cycle",
        url: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        name: "Palindrome Linked List",
        url: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        name: "Remove Duplicates from Sorted List",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        name: "Intersection of Two Linked Lists",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        name: "Remove Linked List Elements",
        url: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        name: "Middle of the Linked List",
        url: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        name: "Convert Binary Number in a Linked List to Integer",
        url: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
      },
      {
        name: "Delete Node in a Linked List",
        url: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        name: "Design Linked List",
        url: "https://leetcode.com/problems/design-linked-list/",
      },
      {
        name: "Design HashMap",
        url: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        name: "Design HashSet",
        url: "https://leetcode.com/problems/design-hashset/",
      },
    ],
    medium: [
      {
        name: "Add Two Numbers",
        url: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        name: "Remove Nth Node From End of List",
        url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        name: "Reorder List",
        url: "https://leetcode.com/problems/reorder-list/",
      },
      {
        name: "Linked List Cycle II",
        url: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        name: "Copy List with Random Pointer",
        url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
      {
        name: "Swap Nodes in Pairs",
        url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        name: "Rotate List",
        url: "https://leetcode.com/problems/rotate-list/",
      },
      { name: "Sort List", url: "https://leetcode.com/problems/sort-list/" },
      {
        name: "Odd Even Linked List",
        url: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        name: "Add Two Numbers II",
        url: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        name: "Flatten a Multilevel Doubly Linked List",
        url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        name: "Insert into a Sorted Circular Linked List",
        url: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      },
      {
        name: "Split Linked List in Parts",
        url: "https://leetcode.com/problems/split-linked-list-in-parts/",
      },
      {
        name: "Next Greater Node In Linked List",
        url: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
      },
      {
        name: "Remove Zero Sum Consecutive Nodes from Linked List",
        url: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
      },
      {
        name: "Linked List in Binary Tree",
        url: "https://leetcode.com/problems/linked-list-in-binary-tree/",
      },
      {
        name: "Partition List",
        url: "https://leetcode.com/problems/partition-list/",
      },
      {
        name: "Remove Duplicates from Sorted List II",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        name: "Swapping Nodes in a Linked List",
        url: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
      },
      {
        name: "Design Browser History",
        url: "https://leetcode.com/problems/design-browser-history/",
      },
      {
        name: "Design Front Middle Back Queue",
        url: "https://leetcode.com/problems/design-front-middle-back-queue/",
      },
    ],
    hard: [
      {
        name: "Merge k Sorted Lists",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        name: "Reverse Nodes in k-Group",
        url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
    ],
  },

  slidingwindow: {
    name: "Sliding Window",
    easy: [
      {
        name: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        name: "Contains Duplicate II",
        url: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        name: "Maximum Average Subarray I",
        url: "https://leetcode.com/problems/maximum-average-subarray-i/",
      },
      {
        name: "Minimum Recolors to Get K Consecutive Black Blocks",
        url: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/",
      },
      {
        name: "Find the K-Beauty of a Number",
        url: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
      },
      {
        name: "Defuse the Bomb",
        url: "https://leetcode.com/problems/defuse-the-bomb/",
      },
      {
        name: "Longest Nice Subarray",
        url: "https://leetcode.com/problems/longest-nice-subarray/",
      },
      {
        name: "Diet Plan Performance",
        url: "https://leetcode.com/problems/diet-plan-performance/",
      },
    ],
    medium: [
      {
        name: "Longest Substring Without Repeating Characters",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        name: "Longest Repeating Character Replacement",
        url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        name: "Permutation in String",
        url: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        name: "Minimum Size Subarray Sum",
        url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        name: "Fruit Into Baskets",
        url: "https://leetcode.com/problems/fruit-into-baskets/",
      },
      {
        name: "Max Consecutive Ones III",
        url: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      },
      {
        name: "Subarray Product Less Than K",
        url: "https://leetcode.com/problems/subarray-product-less-than-k/",
      },
      {
        name: "Find All Anagrams in a String",
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        name: "Grumpy Bookstore Owner",
        url: "https://leetcode.com/problems/grumpy-bookstore-owner/",
      },
      {
        name: "Maximum Points You Can Obtain from Cards",
        url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
      },
      {
        name: "Binary Subarrays With Sum",
        url: "https://leetcode.com/problems/binary-subarrays-with-sum/",
      },
      {
        name: "Count Number of Nice Subarrays",
        url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
      },
      {
        name: "Maximum Erasure Value",
        url: "https://leetcode.com/problems/maximum-erasure-value/",
      },
      {
        name: "Get Equal Substrings Within Budget",
        url: "https://leetcode.com/problems/get-equal-substrings-within-budget/",
      },
      {
        name: "Longest Subarray of 1's After Deleting One Element",
        url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      },
      {
        name: "Frequency of the Most Frequent Element",
        url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
      },
      {
        name: "Replace the Substring for Balanced String",
        url: "https://leetcode.com/problems/replace-the-substring-for-balanced-string/",
      },
      {
        name: "Maximum Number of Vowels in a Substring of Given Length",
        url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
      },
      {
        name: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
        url: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
      },
      {
        name: "Longest Turbulent Subarray",
        url: "https://leetcode.com/problems/longest-turbulent-subarray/",
      },
      {
        name: "K Radius Subarray Averages",
        url: "https://leetcode.com/problems/k-radius-subarray-averages/",
      },
      {
        name: "Minimum Number of Flips to Make the Binary String Alternating",
        url: "https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/",
      },
      {
        name: "Find K-Length Substrings With No Repeated Characters",
        url: "https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/",
      },
      {
        name: "Longest Substring with At Most Two Distinct Characters",
        url: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        name: "Longest Substring with At Most K Distinct Characters",
        url: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        name: "Minimum Consecutive Cards to Pick Up",
        url: "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/",
      },
      {
        name: "Maximum Sum of Distinct Subarrays With Length K",
        url: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
      },
      {
        name: "Minimum Swaps to Group All 1's Together II",
        url: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/",
      },
      {
        name: "Count Subarrays With Fixed Bounds",
        url: "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/",
      },
    ],
    hard: [
      {
        name: "Minimum Window Substring",
        url: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        name: "Sliding Window Maximum",
        url: "https://leetcode.com/problems/sliding-window-maximum/",
      },
    ],
  },

  binarysearch: {
    name: "Binary Search",
    easy: [
      {
        name: "Binary Search",
        url: "https://leetcode.com/problems/binary-search/",
      },
      {
        name: "Search Insert Position",
        url: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        name: "First Bad Version",
        url: "https://leetcode.com/problems/first-bad-version/",
      },
      { name: "Sqrt(x)", url: "https://leetcode.com/problems/sqrtx/" },
      {
        name: "Guess Number Higher or Lower",
        url: "https://leetcode.com/problems/guess-number-higher-or-lower/",
      },
      {
        name: "Valid Perfect Square",
        url: "https://leetcode.com/problems/valid-perfect-square/",
      },
      {
        name: "Arranging Coins",
        url: "https://leetcode.com/problems/arranging-coins/",
      },
      {
        name: "Count Negative Numbers in a Sorted Matrix",
        url: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
      },
      {
        name: "Intersection of Two Arrays",
        url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        name: "Intersection of Two Arrays II",
        url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        name: "Two Sum II - Input Array Is Sorted",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        name: "Peak Index in a Mountain Array",
        url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        name: "The K Weakest Rows in a Matrix",
        url: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
      },
      {
        name: "Special Array With X Elements Greater Than or Equal X",
        url: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
      },
      {
        name: "Find Smallest Letter Greater Than Target",
        url: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
      },
      {
        name: "Check If N and Its Double Exist",
        url: "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
      },
      {
        name: "Kth Missing Positive Number",
        url: "https://leetcode.com/problems/kth-missing-positive-number/",
      },
      {
        name: "Find the Distance Value Between Two Arrays",
        url: "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/",
      },
      {
        name: "Maximum Count of Positive Integer and Negative Integer",
        url: "https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/",
      },
      {
        name: "Check if Array Is Sorted and Rotated",
        url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
      },
    ],
    medium: [
      {
        name: "Search in Rotated Sorted Array",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        name: "Find Minimum in Rotated Sorted Array",
        url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        name: "Search a 2D Matrix",
        url: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        name: "Koko Eating Bananas",
        url: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        name: "Find Peak Element",
        url: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        name: "Search in Rotated Sorted Array II",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        name: "Find First and Last Position of Element in Sorted Array",
        url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        name: "Single Element in a Sorted Array",
        url: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        name: "Capacity To Ship Packages Within D Days",
        url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
      {
        name: "Time Based Key-Value Store",
        url: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        name: "Minimum Number of Days to Make m Bouquets",
        url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
      },
      {
        name: "Magnetic Force Between Two Balls",
        url: "https://leetcode.com/problems/magnetic-force-between-two-balls/",
      },
      {
        name: "Find the Smallest Divisor Given a Threshold",
        url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
      },
      {
        name: "Search a 2D Matrix II",
        url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        name: "Random Pick with Weight",
        url: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      { name: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/" },
      {
        name: "Find K Closest Elements",
        url: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        name: "Divide Two Integers",
        url: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        name: "Maximum Value at a Given Index in a Bounded Array",
        url: "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/",
      },
      {
        name: "Minimum Speed to Arrive on Time",
        url: "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
      },
      {
        name: "Minimize Maximum of Array",
        url: "https://leetcode.com/problems/minimize-maximum-of-array/",
      },
      {
        name: "Minimum Time to Complete Trips",
        url: "https://leetcode.com/problems/minimum-time-to-complete-trips/",
      },
      {
        name: "Successful Pairs of Spells and Potions",
        url: "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/",
      },
      {
        name: "House Robber IV",
        url: "https://leetcode.com/problems/house-robber-iv/",
      },
      {
        name: "Kth Smallest Element in a Sorted Matrix",
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
    ],
    hard: [
      {
        name: "Median of Two Sorted Arrays",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        name: "Split Array Largest Sum",
        url: "https://leetcode.com/problems/split-array-largest-sum/",
      },
    ],
  },

  trees: {
    name: "Trees",
    easy: [
      {
        name: "Invert Binary Tree",
        url: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        name: "Maximum Depth of Binary Tree",
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      { name: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
      {
        name: "Symmetric Tree",
        url: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        name: "Subtree of Another Tree",
        url: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        name: "Balanced Binary Tree",
        url: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        name: "Diameter of Binary Tree",
        url: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        name: "Minimum Depth of Binary Tree",
        url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      { name: "Path Sum", url: "https://leetcode.com/problems/path-sum/" },
      {
        name: "Binary Tree Inorder Traversal",
        url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        name: "Binary Tree Preorder Traversal",
        url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        name: "Binary Tree Postorder Traversal",
        url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        name: "Merge Two Binary Trees",
        url: "https://leetcode.com/problems/merge-two-binary-trees/",
      },
      {
        name: "Search in a Binary Search Tree",
        url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        name: "Convert Sorted Array to Binary Search Tree",
        url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        name: "Lowest Common Ancestor of a Binary Search Tree",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        name: "Range Sum of BST",
        url: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        name: "Univalued Binary Tree",
        url: "https://leetcode.com/problems/univalued-binary-tree/",
      },
      {
        name: "Leaf-Similar Trees",
        url: "https://leetcode.com/problems/leaf-similar-trees/",
      },
      {
        name: "Average of Levels in Binary Tree",
        url: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
      },
      {
        name: "N-ary Tree Preorder Traversal",
        url: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/",
      },
      {
        name: "N-ary Tree Postorder Traversal",
        url: "https://leetcode.com/problems/n-ary-tree-postorder-traversal/",
      },
      {
        name: "Maximum Depth of N-ary Tree",
        url: "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",
      },
      {
        name: "Sum of Left Leaves",
        url: "https://leetcode.com/problems/sum-of-left-leaves/",
      },
      {
        name: "Find Mode in Binary Search Tree",
        url: "https://leetcode.com/problems/find-mode-in-binary-search-tree/",
      },
      {
        name: "Minimum Absolute Difference in BST",
        url: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
      },
      {
        name: "Two Sum IV - Input is a BST",
        url: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      },
      {
        name: "Increasing Order Search Tree",
        url: "https://leetcode.com/problems/increasing-order-search-tree/",
      },
      {
        name: "Cousins in Binary Tree",
        url: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        name: "Sum of Root To Leaf Binary Numbers",
        url: "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/",
      },
      {
        name: "Binary Tree Paths",
        url: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        name: "Count Complete Tree Nodes",
        url: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        name: "Evaluate Boolean Binary Tree",
        url: "https://leetcode.com/problems/evaluate-boolean-binary-tree/",
      },
      {
        name: "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
        url: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
      },
    ],
    medium: [
      {
        name: "Binary Tree Level Order Traversal",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        name: "Binary Tree Right Side View",
        url: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        name: "Validate Binary Search Tree",
        url: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        name: "Kth Smallest Element in a BST",
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        name: "Construct Binary Tree from Preorder and Inorder Traversal",
        url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        name: "Lowest Common Ancestor of a Binary Tree",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        name: "Count Good Nodes in Binary Tree",
        url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
      },
      {
        name: "Path Sum II",
        url: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        name: "Binary Tree Zigzag Level Order Traversal",
        url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        name: "Flatten Binary Tree to Linked List",
        url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        name: "Populating Next Right Pointers in Each Node",
        url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        name: "Populating Next Right Pointers in Each Node II",
        url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
      },
      {
        name: "Binary Tree Level Order Traversal II",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        name: "Sum Root to Leaf Numbers",
        url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        name: "Path Sum III",
        url: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        name: "House Robber III",
        url: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        name: "Construct Binary Tree from Inorder and Postorder Traversal",
        url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        name: "Convert BST to Greater Tree",
        url: "https://leetcode.com/problems/convert-bst-to-greater-tree/",
      },
      {
        name: "Delete Node in a BST",
        url: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        name: "Insert into a Binary Search Tree",
        url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      },
      {
        name: "All Nodes Distance K in Binary Tree",
        url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        name: "Find Duplicate Subtrees",
        url: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        name: "Maximum Width of Binary Tree",
        url: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        name: "Binary Search Tree Iterator",
        url: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        name: "Trim a Binary Search Tree",
        url: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        name: "N-ary Tree Level Order Traversal",
        url: "https://leetcode.com/problems/n-ary-tree-level-order-traversal/",
      },
      {
        name: "Smallest Subtree with all the Deepest Nodes",
        url: "https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/",
      },
      {
        name: "Flip Equivalent Binary Trees",
        url: "https://leetcode.com/problems/flip-equivalent-binary-trees/",
      },
      {
        name: "Distribute Coins in Binary Tree",
        url: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
      },
      {
        name: "Vertical Order Traversal of a Binary Tree",
        url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        name: "Deepest Leaves Sum",
        url: "https://leetcode.com/problems/deepest-leaves-sum/",
      },
      {
        name: "Maximum Level Sum of a Binary Tree",
        url: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/",
      },
      {
        name: "Longest ZigZag Path in a Binary Tree",
        url: "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/",
      },
      {
        name: "Even Odd Tree",
        url: "https://leetcode.com/problems/even-odd-tree/",
      },
      {
        name: "Pseudo-Palindromic Paths in a Binary Tree",
        url: "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",
      },
    ],
    hard: [
      {
        name: "Binary Tree Maximum Path Sum",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        name: "Serialize and Deserialize Binary Tree",
        url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
    ],
  },

  tries: {
    name: "Tries",
    easy: [],
    medium: [
      {
        name: "Implement Trie (Prefix Tree)",
        url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        name: "Design Add and Search Words Data Structure",
        url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
      },
      {
        name: "Replace Words",
        url: "https://leetcode.com/problems/replace-words/",
      },
      {
        name: "Map Sum Pairs",
        url: "https://leetcode.com/problems/map-sum-pairs/",
      },
      {
        name: "Top K Frequent Words",
        url: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        name: "Maximum XOR of Two Numbers in an Array",
        url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
      },
      {
        name: "Longest Word in Dictionary",
        url: "https://leetcode.com/problems/longest-word-in-dictionary/",
      },
      {
        name: "Search Suggestions System",
        url: "https://leetcode.com/problems/search-suggestions-system/",
      },
      {
        name: "Camelcase Matching",
        url: "https://leetcode.com/problems/camelcase-matching/",
      },
      {
        name: "Index Pairs of a String",
        url: "https://leetcode.com/problems/index-pairs-of-a-string/",
      },
      {
        name: "Implement Magic Dictionary",
        url: "https://leetcode.com/problems/implement-magic-dictionary/",
      },
      {
        name: "Longest Word With All Prefixes",
        url: "https://leetcode.com/problems/longest-word-with-all-prefixes/",
      },
      {
        name: "Design File System",
        url: "https://leetcode.com/problems/design-file-system/",
      },
      {
        name: "Sum of Prefix Scores of Strings",
        url: "https://leetcode.com/problems/sum-of-prefix-scores-of-strings/",
      },
    ],
    hard: [
      {
        name: "Word Search II",
        url: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        name: "Palindrome Pairs",
        url: "https://leetcode.com/problems/palindrome-pairs/",
      },
    ],
  },

  backtracking: {
    name: "Backtracking",
    easy: [
      {
        name: "Letter Case Permutation",
        url: "https://leetcode.com/problems/letter-case-permutation/",
      },
      {
        name: "Binary Watch",
        url: "https://leetcode.com/problems/binary-watch/",
      },
    ],
    medium: [
      { name: "Subsets", url: "https://leetcode.com/problems/subsets/" },
      { name: "Subsets II", url: "https://leetcode.com/problems/subsets-ii/" },
      {
        name: "Permutations",
        url: "https://leetcode.com/problems/permutations/",
      },
      {
        name: "Permutations II",
        url: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        name: "Combination Sum",
        url: "https://leetcode.com/problems/combination-sum/",
      },
      {
        name: "Combination Sum II",
        url: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        name: "Combinations",
        url: "https://leetcode.com/problems/combinations/",
      },
      {
        name: "Generate Parentheses",
        url: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        name: "Letter Combinations of a Phone Number",
        url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        name: "Word Search",
        url: "https://leetcode.com/problems/word-search/",
      },
      {
        name: "Palindrome Partitioning",
        url: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        name: "Restore IP Addresses",
        url: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        name: "Combination Sum III",
        url: "https://leetcode.com/problems/combination-sum-iii/",
      },
      {
        name: "Factor Combinations",
        url: "https://leetcode.com/problems/factor-combinations/",
      },
      {
        name: "Split a String Into the Max Number of Unique Substrings",
        url: "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/",
      },
      {
        name: "Partition to K Equal Sum Subsets",
        url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        name: "Beautiful Arrangement",
        url: "https://leetcode.com/problems/beautiful-arrangement/",
      },
      {
        name: "Matchsticks to Square",
        url: "https://leetcode.com/problems/matchsticks-to-square/",
      },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      {
        name: "Path with Maximum Gold",
        url: "https://leetcode.com/problems/path-with-maximum-gold/",
      },
      {
        name: "Additive Number",
        url: "https://leetcode.com/problems/additive-number/",
      },
      {
        name: "Construct the Lexicographically Largest Valid Sequence",
        url: "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/",
      },
      {
        name: "Ambiguous Coordinates",
        url: "https://leetcode.com/problems/ambiguous-coordinates/",
      },
      {
        name: "All Paths from Source to Target",
        url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
      },
      {
        name: "Generalized Abbreviation",
        url: "https://leetcode.com/problems/generalized-abbreviation/",
      },
      {
        name: "Letter Tile Possibilities",
        url: "https://leetcode.com/problems/letter-tile-possibilities/",
      },
      {
        name: "Splitting a String Into Descending Consecutive Values",
        url: "https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/",
      },
      {
        name: "Maximum Length of a Concatenated String with Unique Characters",
        url: "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/",
      },
      {
        name: "Iterator for Combination",
        url: "https://leetcode.com/problems/iterator-for-combination/",
      },
      {
        name: "The k-th Lexicographical String of All Happy Strings of Length n",
        url: "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
      },
    ],
    hard: [
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
      {
        name: "Sudoku Solver",
        url: "https://leetcode.com/problems/sudoku-solver/",
      },
    ],
  },

  graphs: {
    name: "Graphs",
    easy: [
      {
        name: "Find the Town Judge",
        url: "https://leetcode.com/problems/find-the-town-judge/",
      },
      {
        name: "Find Center of Star Graph",
        url: "https://leetcode.com/problems/find-center-of-star-graph/",
      },
      {
        name: "Find if Path Exists in Graph",
        url: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
      },
    ],
    medium: [
      {
        name: "Number of Islands",
        url: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "Clone Graph",
        url: "https://leetcode.com/problems/clone-graph/",
      },
      {
        name: "Pacific Atlantic Water Flow",
        url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        name: "Course Schedule",
        url: "https://leetcode.com/problems/course-schedule/",
      },
      {
        name: "Course Schedule II",
        url: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        name: "Number of Provinces",
        url: "https://leetcode.com/problems/number-of-provinces/",
      },
      {
        name: "Rotting Oranges",
        url: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        name: "Surrounded Regions",
        url: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        name: "Graph Valid Tree",
        url: "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        name: "Redundant Connection",
        url: "https://leetcode.com/problems/redundant-connection/",
      },
      {
        name: "Max Area of Island",
        url: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        name: "All Paths From Source to Target",
        url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
      },
      {
        name: "Keys and Rooms",
        url: "https://leetcode.com/problems/keys-and-rooms/",
      },
      {
        name: "Is Graph Bipartite?",
        url: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        name: "Possible Bipartition",
        url: "https://leetcode.com/problems/possible-bipartition/",
      },
      {
        name: "Shortest Path in Binary Matrix",
        url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      },
      { name: "01 Matrix", url: "https://leetcode.com/problems/01-matrix/" },
      {
        name: "As Far from Land as Possible",
        url: "https://leetcode.com/problems/as-far-from-land-as-possible/",
      },
      {
        name: "Snakes and Ladders",
        url: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        name: "Open the Lock",
        url: "https://leetcode.com/problems/open-the-lock/",
      },
      {
        name: "Minimum Jumps to Reach Home",
        url: "https://leetcode.com/problems/minimum-jumps-to-reach-home/",
      },
      {
        name: "Word Ladder",
        url: "https://leetcode.com/problems/word-ladder/",
      },
      {
        name: "Number of Connected Components in an Undirected Graph",
        url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
      {
        name: "Accounts Merge",
        url: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        name: "Regions Cut By Slashes",
        url: "https://leetcode.com/problems/regions-cut-by-slashes/",
      },
      {
        name: "Satisfiability of Equality Equations",
        url: "https://leetcode.com/problems/satisfiability-of-equality-equations/",
      },
      {
        name: "Evaluate Division",
        url: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        name: "Minimum Number of Vertices to Reach All Nodes",
        url: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",
      },
      {
        name: "Find Eventual Safe States",
        url: "https://leetcode.com/problems/find-eventual-safe-states/",
      },
      {
        name: "Loud and Rich",
        url: "https://leetcode.com/problems/loud-and-rich/",
      },
      {
        name: "Shortest Bridge",
        url: "https://leetcode.com/problems/shortest-bridge/",
      },
      {
        name: "Time Needed to Inform All Employees",
        url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
      },
      {
        name: "Number of Operations to Make Network Connected",
        url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
      },
      {
        name: "Reorder Routes to Make All Paths Lead to the City Zero",
        url: "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/",
      },
      {
        name: "Detonate the Maximum Bombs",
        url: "https://leetcode.com/problems/detonate-the-maximum-bombs/",
      },
      {
        name: "Number of Enclaves",
        url: "https://leetcode.com/problems/number-of-enclaves/",
      },
      {
        name: "Number of Closed Islands",
        url: "https://leetcode.com/problems/number-of-closed-islands/",
      },
      {
        name: "Coloring A Border",
        url: "https://leetcode.com/problems/coloring-a-border/",
      },
      {
        name: "Making A Large Island",
        url: "https://leetcode.com/problems/making-a-large-island/",
      },
    ],
    hard: [
      {
        name: "Word Ladder",
        url: "https://leetcode.com/problems/word-ladder/",
      },
      {
        name: "Alien Dictionary",
        url: "https://leetcode.com/problems/alien-dictionary/",
      },
    ],
  },

  dp1d: {
    name: "1D Dynamic Programming",
    easy: [
      {
        name: "Climbing Stairs",
        url: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        name: "Min Cost Climbing Stairs",
        url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      },
      {
        name: "Fibonacci Number",
        url: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        name: "N-th Tribonacci Number",
        url: "https://leetcode.com/problems/n-th-tribonacci-number/",
      },
      {
        name: "Is Subsequence",
        url: "https://leetcode.com/problems/is-subsequence/",
      },
      {
        name: "Divisor Game",
        url: "https://leetcode.com/problems/divisor-game/",
      },
      {
        name: "Counting Bits",
        url: "https://leetcode.com/problems/counting-bits/",
      },
      {
        name: "Get Maximum in Generated Array",
        url: "https://leetcode.com/problems/get-maximum-in-generated-array/",
      },
      {
        name: "Pascal's Triangle",
        url: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        name: "Pascal's Triangle II",
        url: "https://leetcode.com/problems/pascals-triangle-ii/",
      },
    ],
    medium: [
      {
        name: "House Robber",
        url: "https://leetcode.com/problems/house-robber/",
      },
      {
        name: "House Robber II",
        url: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        name: "Longest Palindromic Substring",
        url: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        name: "Palindromic Substrings",
        url: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        name: "Decode Ways",
        url: "https://leetcode.com/problems/decode-ways/",
      },
      {
        name: "Coin Change",
        url: "https://leetcode.com/problems/coin-change/",
      },
      {
        name: "Maximum Product Subarray",
        url: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      { name: "Word Break", url: "https://leetcode.com/problems/word-break/" },
      {
        name: "Longest Increasing Subsequence",
        url: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        name: "Partition Equal Subset Sum",
        url: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        name: "Perfect Squares",
        url: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        name: "Combination Sum IV",
        url: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        name: "Wiggle Subsequence",
        url: "https://leetcode.com/problems/wiggle-subsequence/",
      },
      {
        name: "Maximum Length of Pair Chain",
        url: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        name: "Integer Break",
        url: "https://leetcode.com/problems/integer-break/",
      },
      {
        name: "Delete and Earn",
        url: "https://leetcode.com/problems/delete-and-earn/",
      },
      {
        name: "Best Time to Buy and Sell Stock with Cooldown",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      },
      {
        name: "Best Time to Buy and Sell Stock with Transaction Fee",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      },
      {
        name: "Minimum Cost For Tickets",
        url: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        name: "Longest Arithmetic Subsequence of Given Difference",
        url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
      },
      {
        name: "Longest Arithmetic Subsequence",
        url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
      },
      {
        name: "Greatest Sum Divisible by Three",
        url: "https://leetcode.com/problems/greatest-sum-divisible-by-three/",
      },
      {
        name: "Filling Bookcase Shelves",
        url: "https://leetcode.com/problems/filling-bookcase-shelves/",
      },
      {
        name: "Ones and Zeroes",
        url: "https://leetcode.com/problems/ones-and-zeroes/",
      },
      {
        name: "Minimum Falling Path Sum",
        url: "https://leetcode.com/problems/minimum-falling-path-sum/",
      },
      {
        name: "Domino and Tromino Tiling",
        url: "https://leetcode.com/problems/domino-and-tromino-tiling/",
      },
      {
        name: "Extra Characters in a String",
        url: "https://leetcode.com/problems/extra-characters-in-a-string/",
      },
      {
        name: "Solving Questions With Brainpower",
        url: "https://leetcode.com/problems/solving-questions-with-brainpower/",
      },
      {
        name: "Count Ways To Build Good Strings",
        url: "https://leetcode.com/problems/count-ways-to-build-good-strings/",
      },
    ],
    hard: [
      {
        name: "Maximum Sum of 3 Non-Overlapping Subarrays",
        url: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
      },
      {
        name: "Student Attendance Record II",
        url: "https://leetcode.com/problems/student-attendance-record-ii/",
      },
    ],
  },

  advgraphs: {
    name: "Advanced Graphs",
    easy: [],
    medium: [
      {
        name: "Min Cost to Connect All Points",
        url: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
      },
      {
        name: "Network Delay Time",
        url: "https://leetcode.com/problems/network-delay-time/",
      },
      {
        name: "Cheapest Flights Within K Stops",
        url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        name: "Path with Maximum Probability",
        url: "https://leetcode.com/problems/path-with-maximum-probability/",
      },
      {
        name: "Find the City With the Smallest Number of Neighbors",
        url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
      },
      {
        name: "Connecting Cities With Minimum Cost",
        url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
      },
      {
        name: "Path With Minimum Effort",
        url: "https://leetcode.com/problems/path-with-minimum-effort/",
      },
      {
        name: "Number of Ways to Arrive at Destination",
        url: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
      },
      {
        name: "Minimum Cost to Make at Least One Valid Path in a Grid",
        url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/",
      },
      {
        name: "Minimum Obstacle Removal to Reach Corner",
        url: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/",
      },
      {
        name: "Design Graph With Shortest Path Calculator",
        url: "https://leetcode.com/problems/design-graph-with-shortest-path-calculator/",
      },
    ],
    hard: [
      {
        name: "Reconstruct Itinerary",
        url: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        name: "Swim in Rising Water",
        url: "https://leetcode.com/problems/swim-in-rising-water/",
      },
    ],
  },

  dp2d: {
    name: "2D Dynamic Programming",
    easy: [
      {
        name: "Pascal's Triangle",
        url: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        name: "Pascal's Triangle II",
        url: "https://leetcode.com/problems/pascals-triangle-ii/",
      },
    ],
    medium: [
      {
        name: "Unique Paths",
        url: "https://leetcode.com/problems/unique-paths/",
      },
      {
        name: "Unique Paths II",
        url: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        name: "Longest Common Subsequence",
        url: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        name: "Best Time to Buy and Sell Stock with Cooldown",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      },
      {
        name: "Coin Change 2",
        url: "https://leetcode.com/problems/coin-change-2/",
      },
      { name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },
      {
        name: "Interleaving String",
        url: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        name: "Minimum Path Sum",
        url: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        name: "Maximal Square",
        url: "https://leetcode.com/problems/maximal-square/",
      },
      {
        name: "Edit Distance",
        url: "https://leetcode.com/problems/edit-distance/",
      },
      {
        name: "Last Stone Weight II",
        url: "https://leetcode.com/problems/last-stone-weight-ii/",
      },
      { name: "Triangle", url: "https://leetcode.com/problems/triangle/" },
      {
        name: "Minimum Falling Path Sum",
        url: "https://leetcode.com/problems/minimum-falling-path-sum/",
      },
      {
        name: "Maximum Number of Points with Cost",
        url: "https://leetcode.com/problems/maximum-number-of-points-with-cost/",
      },
      {
        name: "Ones and Zeroes",
        url: "https://leetcode.com/problems/ones-and-zeroes/",
      },
      {
        name: "Longest Palindromic Subsequence",
        url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      { name: "Stone Game", url: "https://leetcode.com/problems/stone-game/" },
      {
        name: "Stone Game II",
        url: "https://leetcode.com/problems/stone-game-ii/",
      },
      {
        name: "Out of Boundary Paths",
        url: "https://leetcode.com/problems/out-of-boundary-paths/",
      },
      {
        name: "Number of Dice Rolls With Target Sum",
        url: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        name: "Profitable Schemes",
        url: "https://leetcode.com/problems/profitable-schemes/",
      },
      {
        name: "Longest String Chain",
        url: "https://leetcode.com/problems/longest-string-chain/",
      },
      {
        name: "Delete Operation for Two Strings",
        url: "https://leetcode.com/problems/delete-operation-for-two-strings/",
      },
      {
        name: "Shortest Common Supersequence",
        url: "https://leetcode.com/problems/shortest-common-supersequence/",
      },
      {
        name: "Uncrossed Lines",
        url: "https://leetcode.com/problems/uncrossed-lines/",
      },
      {
        name: "Count Square Submatrices with All Ones",
        url: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
      },
      {
        name: "Maximum Profit in Job Scheduling",
        url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
      },
    ],
    hard: [
      {
        name: "Longest Increasing Path in a Matrix",
        url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        name: "Distinct Subsequences",
        url: "https://leetcode.com/problems/distinct-subsequences/",
      },
    ],
  },

  stack: {
    name: "Stack",
    easy: [
      {
        name: "Valid Parentheses",
        url: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "Implement Queue using Stacks",
        url: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        name: "Implement Stack using Queues",
        url: "https://leetcode.com/problems/implement-stack-using-queues/",
      },
      { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
      {
        name: "Baseball Game",
        url: "https://leetcode.com/problems/baseball-game/",
      },
      {
        name: "Next Greater Element I",
        url: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        name: "Backspace String Compare",
        url: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        name: "Remove All Adjacent Duplicates In String",
        url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        name: "Remove Outermost Parentheses",
        url: "https://leetcode.com/problems/remove-outermost-parentheses/",
      },
      {
        name: "Make The String Great",
        url: "https://leetcode.com/problems/make-the-string-great/",
      },
      {
        name: "Crawler Log Folder",
        url: "https://leetcode.com/problems/crawler-log-folder/",
      },
      {
        name: "Final Prices With a Special Discount in a Shop",
        url: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
      },
      {
        name: "Build an Array With Stack Operations",
        url: "https://leetcode.com/problems/build-an-array-with-stack-operations/",
      },
      {
        name: "Maximum Nesting Depth of the Parentheses",
        url: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
      },
      {
        name: "Reverse Substrings Between Each Pair of Parentheses",
        url: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/",
      },
    ],
    medium: [
      {
        name: "Evaluate Reverse Polish Notation",
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        name: "Daily Temperatures",
        url: "https://leetcode.com/problems/daily-temperatures/",
      },
      { name: "Car Fleet", url: "https://leetcode.com/problems/car-fleet/" },
      {
        name: "Decode String",
        url: "https://leetcode.com/problems/decode-string/",
      },
      {
        name: "Asteroid Collision",
        url: "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        name: "Remove K Digits",
        url: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        name: "132 Pattern",
        url: "https://leetcode.com/problems/132-pattern/",
      },
      {
        name: "Next Greater Element II",
        url: "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        name: "Simplify Path",
        url: "https://leetcode.com/problems/simplify-path/",
      },
      {
        name: "Online Stock Span",
        url: "https://leetcode.com/problems/online-stock-span/",
      },
      {
        name: "Basic Calculator II",
        url: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        name: "Flatten Nested List Iterator",
        url: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        name: "Exclusive Time of Functions",
        url: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        name: "Score of Parentheses",
        url: "https://leetcode.com/problems/score-of-parentheses/",
      },
      {
        name: "Validate Stack Sequences",
        url: "https://leetcode.com/problems/validate-stack-sequences/",
      },
      {
        name: "Remove Duplicate Letters",
        url: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        name: "Minimum Add to Make Parentheses Valid",
        url: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
      },
      {
        name: "Minimum Remove to Make Valid Parentheses",
        url: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        name: "Reverse Substrings Between Each Pair of Parentheses",
        url: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/",
      },
      {
        name: "Minimum Insertions to Balance a Parentheses String",
        url: "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/",
      },
      {
        name: "Sum of Subarray Minimums",
        url: "https://leetcode.com/problems/sum-of-subarray-minimums/",
      },
      {
        name: "Sum of Subarray Ranges",
        url: "https://leetcode.com/problems/sum-of-subarray-ranges/",
      },
      {
        name: "Car Fleet II",
        url: "https://leetcode.com/problems/car-fleet-ii/",
      },
      {
        name: "Removing Stars From a String",
        url: "https://leetcode.com/problems/removing-stars-from-a-string/",
      },
      {
        name: "Evaluate Reverse Polish Notation",
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
    ],
    hard: [
      {
        name: "Largest Rectangle in Histogram",
        url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        name: "Maximal Rectangle",
        url: "https://leetcode.com/problems/maximal-rectangle/",
      },
    ],
  },

  heap: {
    name: "Heap / Priority Queue",
    easy: [
      {
        name: "Kth Largest Element in a Stream",
        url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        name: "Last Stone Weight",
        url: "https://leetcode.com/problems/last-stone-weight/",
      },
      {
        name: "Relative Ranks",
        url: "https://leetcode.com/problems/relative-ranks/",
      },
      {
        name: "Take Gifts From the Richest Pile",
        url: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/",
      },
    ],
    medium: [
      {
        name: "Kth Largest Element in an Array",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        name: "K Closest Points to Origin",
        url: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        name: "Task Scheduler",
        url: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        name: "Design Twitter",
        url: "https://leetcode.com/problems/design-twitter/",
      },
      {
        name: "Top K Frequent Elements",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        name: "Top K Frequent Words",
        url: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        name: "Sort Characters By Frequency",
        url: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        name: "Find K Pairs with Smallest Sums",
        url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        name: "Reorganize String",
        url: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        name: "Seat Reservation Manager",
        url: "https://leetcode.com/problems/seat-reservation-manager/",
      },
      {
        name: "Kth Smallest Element in a Sorted Matrix",
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        name: "Furthest Building You Can Reach",
        url: "https://leetcode.com/problems/furthest-building-you-can-reach/",
      },
      {
        name: "Reduce Array Size to The Half",
        url: "https://leetcode.com/problems/reduce-array-size-to-the-half/",
      },
      {
        name: "The K Weakest Rows in a Matrix",
        url: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
      },
      {
        name: "Process Tasks Using Servers",
        url: "https://leetcode.com/problems/process-tasks-using-servers/",
      },
      {
        name: "Single-Threaded CPU",
        url: "https://leetcode.com/problems/single-threaded-cpu/",
      },
      {
        name: "Maximum Subsequence Score",
        url: "https://leetcode.com/problems/maximum-subsequence-score/",
      },
      {
        name: "Total Cost to Hire K Workers",
        url: "https://leetcode.com/problems/total-cost-to-hire-k-workers/",
      },
      {
        name: "Maximum Performance of a Team",
        url: "https://leetcode.com/problems/maximum-performance-of-a-team/",
      },
      {
        name: "Minimum Cost to Hire K Workers",
        url: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
      },
      {
        name: "Smallest Number in Infinite Set",
        url: "https://leetcode.com/problems/smallest-number-in-infinite-set/",
      },
      {
        name: "Maximum Number of Events That Can Be Attended",
        url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
      },
      {
        name: "Minimum Number of Refueling Stops",
        url: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
      },
    ],
    hard: [
      {
        name: "Find Median from Data Stream",
        url: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        name: "Merge k Sorted Lists",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
    ],
  },

  greedy: {
    name: "Greedy",
    easy: [
      {
        name: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        name: "Best Time to Buy and Sell Stock II",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        name: "Assign Cookies",
        url: "https://leetcode.com/problems/assign-cookies/",
      },
      {
        name: "Lemonade Change",
        url: "https://leetcode.com/problems/lemonade-change/",
      },
      {
        name: "Maximum Units on a Truck",
        url: "https://leetcode.com/problems/maximum-units-on-a-truck/",
      },
      {
        name: "Can Place Flowers",
        url: "https://leetcode.com/problems/can-place-flowers/",
      },
      {
        name: "Longest Palindrome",
        url: "https://leetcode.com/problems/longest-palindrome/",
      },
      {
        name: "Minimum Cost to Move Chips to The Same Position",
        url: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/",
      },
      {
        name: "Walking Robot Simulation",
        url: "https://leetcode.com/problems/walking-robot-simulation/",
      },
      {
        name: "Split a String in Balanced Strings",
        url: "https://leetcode.com/problems/split-a-string-in-balanced-strings/",
      },
      {
        name: "Minimum Subsequence in Non-Increasing Order",
        url: "https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/",
      },
      {
        name: "Number of Students Unable to Eat Lunch",
        url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/",
      },
      {
        name: "Maximum 69 Number",
        url: "https://leetcode.com/problems/maximum-69-number/",
      },
      {
        name: "Minimum Cost to Make Array Equal",
        url: "https://leetcode.com/problems/minimum-cost-to-make-array-equal/",
      },
    ],
    medium: [
      {
        name: "Maximum Subarray",
        url: "https://leetcode.com/problems/maximum-subarray/",
      },
      { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
      {
        name: "Jump Game II",
        url: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        name: "Gas Station",
        url: "https://leetcode.com/problems/gas-station/",
      },
      {
        name: "Hand of Straights",
        url: "https://leetcode.com/problems/hand-of-straights/",
      },
      {
        name: "Merge Triplets to Form Target Triplet",
        url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
      },
      {
        name: "Partition Labels",
        url: "https://leetcode.com/problems/partition-labels/",
      },
      {
        name: "Valid Parenthesis String",
        url: "https://leetcode.com/problems/valid-parenthesis-string/",
      },
      {
        name: "Minimum Number of Arrows to Burst Balloons",
        url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        name: "Non-overlapping Intervals",
        url: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        name: "Bag of Tokens",
        url: "https://leetcode.com/problems/bag-of-tokens/",
      },
      {
        name: "Boats to Save People",
        url: "https://leetcode.com/problems/boats-to-save-people/",
      },
      {
        name: "Two City Scheduling",
        url: "https://leetcode.com/problems/two-city-scheduling/",
      },
      {
        name: "Minimum Deletions to Make Character Frequencies Unique",
        url: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/",
      },
      {
        name: "Reduce Array Size to The Half",
        url: "https://leetcode.com/problems/reduce-array-size-to-the-half/",
      },
      {
        name: "Group the People Given the Group Size They Belong To",
        url: "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/",
      },
      {
        name: "Minimum Rounds to Complete All Tasks",
        url: "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/",
      },
      {
        name: "Optimal Partition of String",
        url: "https://leetcode.com/problems/optimal-partition-of-string/",
      },
      {
        name: "Minimize Maximum Pair Sum in Array",
        url: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/",
      },
      {
        name: "Minimum Operations to Reduce X to Zero",
        url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
      },
      {
        name: "Remove Duplicate Letters",
        url: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        name: "Queue Reconstruction by Height",
        url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        name: "Smallest String With Swaps",
        url: "https://leetcode.com/problems/smallest-string-with-swaps/",
      },
      {
        name: "Maximum Ice Cream Bars",
        url: "https://leetcode.com/problems/maximum-ice-cream-bars/",
      },
      {
        name: "Broken Calculator",
        url: "https://leetcode.com/problems/broken-calculator/",
      },
      {
        name: "Car Pooling",
        url: "https://leetcode.com/problems/car-pooling/",
      },
      {
        name: "Dota2 Senate",
        url: "https://leetcode.com/problems/dota2-senate/",
      },
      {
        name: "Advantage Shuffle",
        url: "https://leetcode.com/problems/advantage-shuffle/",
      },
    ],
    hard: [
      { name: "Candy", url: "https://leetcode.com/problems/candy/" },
      { name: "IPO", url: "https://leetcode.com/problems/ipo/" },
    ],
  },

  intervals: {
    name: "Intervals",
    easy: [
      {
        name: "Meeting Rooms",
        url: "https://leetcode.com/problems/meeting-rooms/",
      },
    ],
    medium: [
      {
        name: "Merge Intervals",
        url: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        name: "Insert Interval",
        url: "https://leetcode.com/problems/insert-interval/",
      },
      {
        name: "Non-overlapping Intervals",
        url: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        name: "Meeting Rooms II",
        url: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        name: "Minimum Number of Arrows to Burst Balloons",
        url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        name: "Interval List Intersections",
        url: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        name: "Remove Covered Intervals",
        url: "https://leetcode.com/problems/remove-covered-intervals/",
      },
      {
        name: "My Calendar I",
        url: "https://leetcode.com/problems/my-calendar-i/",
      },
      {
        name: "My Calendar II",
        url: "https://leetcode.com/problems/my-calendar-ii/",
      },
      {
        name: "Car Pooling",
        url: "https://leetcode.com/problems/car-pooling/",
      },
      {
        name: "Video Stitching",
        url: "https://leetcode.com/problems/video-stitching/",
      },
      {
        name: "Summary Ranges",
        url: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        name: "Add Bold Tag in String",
        url: "https://leetcode.com/problems/add-bold-tag-in-string/",
      },
      {
        name: "Teemo Attacking",
        url: "https://leetcode.com/problems/teemo-attacking/",
      },
      {
        name: "Find Right Interval",
        url: "https://leetcode.com/problems/find-right-interval/",
      },
      {
        name: "Range Module",
        url: "https://leetcode.com/problems/range-module/",
      },
      {
        name: "Divide Intervals Into Minimum Number of Groups",
        url: "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/",
      },
      {
        name: "Determine if Two Events Have Conflict",
        url: "https://leetcode.com/problems/determine-if-two-events-have-conflict/",
      },
      {
        name: "Maximum Number of Events That Can Be Attended",
        url: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
      },
    ],
    hard: [
      {
        name: "Minimum Interval to Include Each Query",
        url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
      },
      {
        name: "Employee Free Time",
        url: "https://leetcode.com/problems/employee-free-time/",
      },
    ],
  },

  bit: {
    name: "Bit Manipulation",
    easy: [
      {
        name: "Single Number",
        url: "https://leetcode.com/problems/single-number/",
      },
      {
        name: "Number of 1 Bits",
        url: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        name: "Counting Bits",
        url: "https://leetcode.com/problems/counting-bits/",
      },
      {
        name: "Reverse Bits",
        url: "https://leetcode.com/problems/reverse-bits/",
      },
      {
        name: "Missing Number",
        url: "https://leetcode.com/problems/missing-number/",
      },
      {
        name: "Power of Two",
        url: "https://leetcode.com/problems/power-of-two/",
      },
      {
        name: "Power of Four",
        url: "https://leetcode.com/problems/power-of-four/",
      },
      {
        name: "Binary Watch",
        url: "https://leetcode.com/problems/binary-watch/",
      },
      {
        name: "Hamming Distance",
        url: "https://leetcode.com/problems/hamming-distance/",
      },
      {
        name: "Binary Number with Alternating Bits",
        url: "https://leetcode.com/problems/binary-number-with-alternating-bits/",
      },
      {
        name: "Prime Number of Set Bits in Binary Representation",
        url: "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/",
      },
      {
        name: "Number Complement",
        url: "https://leetcode.com/problems/number-complement/",
      },
      {
        name: "Convert Binary Number in a Linked List to Integer",
        url: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
      },
      {
        name: "XOR Operation in an Array",
        url: "https://leetcode.com/problems/xor-operation-in-an-array/",
      },
      {
        name: "Sort Integers by The Number of 1 Bits",
        url: "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/",
      },
      { name: "Add Binary", url: "https://leetcode.com/problems/add-binary/" },
      { name: "Binary Gap", url: "https://leetcode.com/problems/binary-gap/" },
      {
        name: "Count the Number of Consistent Strings",
        url: "https://leetcode.com/problems/count-the-number-of-consistent-strings/",
      },
      {
        name: "Decode XORed Array",
        url: "https://leetcode.com/problems/decode-xored-array/",
      },
      {
        name: "Count Number of Maximum Bitwise-OR Subsets",
        url: "https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/",
      },
    ],
    medium: [
      {
        name: "Sum of Two Integers",
        url: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        name: "Single Number II",
        url: "https://leetcode.com/problems/single-number-ii/",
      },
      {
        name: "Single Number III",
        url: "https://leetcode.com/problems/single-number-iii/",
      },
      {
        name: "Bitwise AND of Numbers Range",
        url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
      },
      { name: "Subsets", url: "https://leetcode.com/problems/subsets/" },
      { name: "Gray Code", url: "https://leetcode.com/problems/gray-code/" },
      {
        name: "Divide Two Integers",
        url: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        name: "Maximum XOR of Two Numbers in an Array",
        url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
      },
      {
        name: "Decode XORed Permutation",
        url: "https://leetcode.com/problems/decode-xored-permutation/",
      },
      {
        name: "Find the Longest Substring Containing Vowels in Even Counts",
        url: "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",
      },
      {
        name: "Maximum Product of Word Lengths",
        url: "https://leetcode.com/problems/maximum-product-of-word-lengths/",
      },
      {
        name: "Total Hamming Distance",
        url: "https://leetcode.com/problems/total-hamming-distance/",
      },
      {
        name: "Find XOR Sum of All Pairs Bitwise AND",
        url: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/",
      },
      {
        name: "Count Pairs With XOR in a Range",
        url: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/",
      },
      {
        name: "XOR Queries of a Subarray",
        url: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
      },
      {
        name: "Count Triplets That Can Form Two Arrays of Equal XOR",
        url: "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/",
      },
      {
        name: "Concatenation of Consecutive Binary Numbers",
        url: "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",
      },
      {
        name: "Minimum Flips to Make a OR b Equal to c",
        url: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
      },
    ],
    hard: [
      {
        name: "Minimum Number of K Consecutive Bit Flips",
        url: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
      },
      {
        name: "Number of Valid Words for Each Puzzle",
        url: "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/",
      },
    ],
  },
};

export default topics;
