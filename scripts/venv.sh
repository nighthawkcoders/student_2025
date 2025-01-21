#!/bin/bash

# Verify the installation and check the python version
python --version

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python -m venv venv
fi

# Activate the virtual environment
source venv/bin/activate

# Install the required python packages
pip install -r requirements.txt