#!/bin/bash
run_dev() {
    if wget --spider "http://localhost:3000" 2>/dev/null; then
        echo "URL exists"
    else
        npm run dev &
        PID=$!
        sleep $1 
        kill $PID 
        wait 
        echo "--- Dev server is closed ---"
        return 0
        fi
    return 0
}
run_dev "$1"

    # npm run dev &
    # PID=$!
    # npm run test | grep "word" &
    # sleep 10
    # kill $PID
    # wait
    # echo $?
    # if [ $? -eq 0 ]; then
    #     echo "--- Tests successfuly completed! ---"
    #     return 0
    # else
    #     echo "--- Test fail ---"
    #     return 1
    # fi