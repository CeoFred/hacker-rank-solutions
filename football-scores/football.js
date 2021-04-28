'use-strict';


function run(teamA, teamB){

  if(!Array.isArray(teamA)) throw new Error('Team A must be an array');
  if(!Array.isArray(teamB)) throw new Error('Team B must be an array');
  let arrayResult = [];
 
  teamB.forEach(teamBGoal => {
 
    if(!parseInt(teamBGoal)) throw new Error('Goal should be a number');

    let teamBGoalCount = 0;
   
    let teamACurrentCount = 0;
    let found = false;
    teamA.forEach((goal,i) => {
    if(!parseInt(goal)) throw new Error('Goal should be a number');
      teamACurrentCount+= goal;
      if(!found && teamACurrentCount >= teamBGoal){
        found = true;
        arrayResult.push(i+1)
      }
    })
  });

  console.log(arrayResult)
}


run([5,2,1,1,3],[5]) 
run(["a",2,1,1,3],["qq"]) 
