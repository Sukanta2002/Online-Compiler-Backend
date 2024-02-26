#!/bin/bash

code_script="/code/test.js"

# Specify the output file name
output_file="/code/output.txt"

# Execute the Js script and redirect its output to the specified file
node "$code_script" > "$output_file" 2>&1

# Check the exit status of the Python script
if [[ $? -eq 0 ]]; then
  echo "JS script executed successfully and output saved to $output_file."
else
  echo "Error executing JS script. Please check the script and try again."
fi
