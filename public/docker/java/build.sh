#!/bin/bash

code_script="/code/test.java"

# Specify the output file name
output_file="/code/output.txt"

# Execute the java script and redirect its output to the specified file
javac "$code_script"

cd code/

for classfile in *.class; do
    classname=$(echo $classfile | cut -f 1 -d '.')
    echo $classname
    if javap -public $classname | fgrep 'public static void main(java.lang.String[])'; then
        java $classname "$@" > "$output_file" 2>&1
    fi
done

# java "$code_script_without_extention" > "$output_file" 2>&1

# Check the exit status of the Python script
if [[ $? -eq 0 ]]; then
  echo "Java script executed successfully and output saved to $output_file."
  rm *.class
else
  echo "Error executing Java script. Please check the script and try again."
  rm *.class
fi
