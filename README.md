# TypeScript Function Argument Type Mismatch

This repository contains a simple example of a common TypeScript error: a type mismatch in function arguments. The `greeter` function expects a string, but it receives an array. 

## Bug

The `bug.ts` file demonstrates the error. The `greeter` function is defined to accept a string, but the code attempts to pass an array to it. This causes a runtime error.

## Solution

The `bugSolution.ts` file shows how to correct the error. The solution involves either changing the function signature to accept an array or modifying the code to pass a single string argument to the function.