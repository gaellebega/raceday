let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerage = 19;
if(runnerage > 18 )
{
    raceNumber+=1000;
}
if (runnerage > 18 && registeredEarly ) {
    console.log(`you will race at 9:30 ${raceNumber}`);
  }
  else if (runnerage > 18 && !registeredEarly ) {
    console.log(`you will race at 11:00 ${raceNumber}`);
  }
else if (runnerage<18 && registeredEarly){
    console.log(`you will race at 12:30 ${raceNumber}`);
}