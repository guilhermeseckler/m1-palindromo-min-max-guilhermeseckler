function isPalindrome (str) {
    let reversedStr = ''
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]
      reversedStr = reversedStr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
    if (reversedStr === cleanStr) {
      return true
    }
    else {
      return false
    }
  }
  
function arrayMaxMin (arr){
    let arrMin = arr[0];
    let arrMax = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arrMax) {
        arrMax = arr[i];
      }
      if (arr[i] < arrMin) {
        arrMin = arr[i];  
      }
    }
    return [arrMin, arrMax]
  }