
# Programming paradigms



# JavaScript Paradigms

JS is:

- Functional*
- OOP
- ...



<!-- Vous devez en effet savoir qu’il existe deux grands types de langages orientés objet : ceux basés sur les classes, et ceux basés sur les prototypes. -->


## What is functionnal programming ?
Code style, Mindset

-  Computation as the evaluation of mathematical functions
-  Avoid changing-state and mutable data
-  ...

## Principles

- Pure function
  - Same input => Same output
  - No side effect
  - This is not a pure function

    ```js
    var absolute_zero = -273.15;

    const celsiusToKelvin = (temp) => {
    return temp - absolute_zero;
    };
    ```

  - This is cool

    ```js
    const celsiusToKelvin = (temp, absolute_zero) => {
        return temp - absolute_zero;
    };

    // OR

    const celsiusToKelvin = (temp) => {
        return temp + -273.15;
    };
    ```

- Immutability
- High order function

- 



## Resources

<!-- - https://buzut.net/programmation-fonctionnelle-en-javascript/
- https://www.tutorialsteacher.com/javascript/prototype-in-javascript -->
-
