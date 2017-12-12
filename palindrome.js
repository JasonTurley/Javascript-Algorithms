function palindrome(str) {
    // Assign a front and a back pointer
    var front = 0;
    var back = str.length - 1;
  
    // Back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
      // Increments front pointer if current character doesn't meet criteria
      while ( str[front].match(/[\W_]/) ) {
        front++;
        continue;
      }
      // Decrements back pointer if current character doesn't meet criteria
      while ( str[back].match(/[\W_]/) ) {
        back--;
        continue;
      }
      // Finally compare the two characters
      if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++;
        back--;
    }
    
    // If the whole string has been compared without returning false, it's a palindrome!
    return true;
  
  }
