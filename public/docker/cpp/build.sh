#!/bin/bash

# Specify the path to your C++ source file
cpp_file="/code/test.cpp"

# Specify the output file name
output_file="/code/output.txt"

# Define compiler flags (adjust based on your needs)
compiler_flags="-Wall -Wextra -std=c++17"

# Compile your C++ code
g++ $compiler_flags $cpp_file -o program

# Check if compilation was successful
if [[ $? -ne 0 ]]; then
  echo "Error compiling C++ code. Please check the code and try again."
  exit 1
fi

# Execute the compiled program and redirect output
./program > "$output_file" 2>&1

# Check the exit status of the program
if [[ $? -eq 0 ]]; then
  echo "C++ code executed successfully and output saved to $output_file."
else
  echo "Error executing C++ code. Please check the code and try again."
fi

# Clean up (optional)
rm program
