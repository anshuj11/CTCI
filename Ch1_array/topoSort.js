function topologicalSort(jobs, deps) {
  // Write your code here.
  let visited = {};
  let processing = {};
  let cycle = false;
  let res = [];
  
  //Doing DFS starting at jobs[0]
  jobs.forEach(job => {
    if (!visited[job] && !processing[job]) {
      let stack = [job]
      processing[job] = true;
      while (stack.length > 0) {
        let job = stack.pop();
        let dependent = false;
        //find  all the dependecies of job push on the stack
        deps.forEach(dep => {
          if (dep[1] === job && !visited[dep[0]]) {
            if (processing[dep[0]]) {
              cycle = true;
            } else {
              stack.push(dep[0]);
              processing[dep[0]] = true;
              dependent = true;
            }
          }
        });
        if (cycle) return [];
        if (!dependent) {
          res.push(job);
          visited[job] = true;
        } else {
            stack.unshift(job)
        }
      }
    }
  });
    if (res.length === jobs.length)
        return res;
    else
        return [];
}

// Do not edit the line below.
console.log(
  topologicalSort(
    [1, 2, 3, 4, 5,6,7,8],
    [
        [3, 1], [8, 1], [8, 7], [5, 7], [5, 2], [1, 4], [1, 6], [1, 2], [7, 6], [4, 6], [6, 2], [2, 3]
    ]
  )
);
