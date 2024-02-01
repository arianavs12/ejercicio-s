class SeriesNumericas {
    static triangular(n) {
      return (n * (n + 1)) / 2;
    }
  
    static fibonacci(n) {
      if (n <= 1) {
        return n;
      }
  
      let a = 0;
      let b = 1;
  
      for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
      }
  
      return b;
    }
  
    static esPrimo(num) {
      if (num < 2) {
        return false;
      }
  
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
  
      return true;
    }
  
    static primo(n) {
      let count = 0;
      let num = 2;
  
      while (count < n) {
        if (this.esPrimo(num)) {
          count++;
        }
  
        if (count < n) {
          num++;
        }
      }
  
      return num;
    }
  
    static calcularTermino(n) {
      return 5 * this.triangular(n) - 2 * this.fibonacci(n) + this.primo(n + 1);
    }
  }
  
  export default SeriesNumericas;
  

