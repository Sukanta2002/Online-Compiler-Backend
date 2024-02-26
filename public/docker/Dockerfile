FROM ubuntu

# Update package lists
RUN apt update

# Install essential tools
RUN apt install -y \
    build-essential \
    git \
    curl \
    wget

# Install Python
RUN apt install -y python3 python3-pip

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install -y nodejs

# Install Java
RUN apt install -y openjdk-17-jdk

# Install C and C++ compilers
RUN apt install -y \
    gcc \
    g++ \
    make


# Run your application command
CMD [ "chmod +x /code/build.sh" ]
ENTRYPOINT [ "./code/build.sh" ]

