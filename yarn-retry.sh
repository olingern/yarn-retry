# Credit: 
# https://unix.stackexchange.com/questions/82598/how-do-i-write-a-retry-logic-in-script-to-keep-retrying-to-run-it-upto-5-times/82610

n=0
until [ "$n" -ge 5 ]
do
   yarn && break
   n=$((n+1)) 
   sleep 5
done