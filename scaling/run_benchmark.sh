#!/bin/bash

# test-load the server with 200 concurrent connections for 10 seconds

ab -c200 -t10 http://localhost:8080/