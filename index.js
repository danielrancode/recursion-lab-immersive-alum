// Code your solution here!

function printString(string) {
  if (string.length === 1) {
    console.log(string[0])
  }
  else if (string.length > 1) {
    console.log(string[0])
    printString(string.slice(1))
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return str.slice(-1) + reverseString(str.slice(0, str.length - 1))
  }
  return str
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true
  }
  else if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false
}

function addUpTo(arr, i) {
  let subArr = arr.slice(0, i + 1)
  if (subArr.length === 1) {
      return subArr[0]
  }
  return subArr[0] + addUpTo(subArr.slice(1), subArr.length - 1)
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  if (arr[0] <= arr[1]) {
    return maxOf(arr.slice(1))
  }

  if (arr[0] > arr[1]) {
    arr.splice(1, 1)
    return maxOf(arr)
  }
}

function includesNumber(arr, n) {
  if (arr[0] !== n && arr.length > 1) {
    return includesNumber(arr.slice(1), n)
  }
  return arr[0] === n
}
