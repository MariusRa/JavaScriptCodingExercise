(function (){
    
    let A = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2]

    const map = A.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    let number = [...map.keys()].sort();
    let frequency = [...map.values()];
    let numFre = [...map.entries()];
    let missingNumber = [];
    function findMissing(arr,N){
        let i;
        let temp = [];
        for (i = 0; i <= N; i++) {
                temp[i] = 0;
            }
    
            for (i = 0; i < N; i++) {
                temp[arr[i] - 1] = 1;
            }
    
            let ans = 0;
            for (i = 0; i <= N; i++) {
                if (temp[i] == 0)
                    ans = i + 1;
            }
            
            if (ans > Math.max(...A) || ans < Math.min(...A)) {
                missingNumber.push('notMissed');   
            } else {
                missingNumber.push(ans, 0);
            }
    }
       
    findMissing(number, number.length)
    let numbe = [];
    let val = [];
    
    if (missingNumber['0'] !== "notMissed") {
         numFre.push(missingNumber);
    }

    let num = numFre.sort();
    for (let x = 0; x < num.length; x++) {
        numbe.push(num[x][0])
        val.push(numFre[x][1])    
    }

    const currentDiv = document.getElementById("div1");
    const currentDiv1 = document.getElementById("div2");
    const currentDiv2 = document.getElementById("div3");

    const newDiv = document.createElement("p");
    newDiv.classList.add('p-freq');
    const newDiv1 = document.createElement("p");
    newDiv1.classList.add('p-value');
    const newDiv2 = document.createElement("p");
    

    const newContent = document.createTextNode("A = " + A);
    newDiv2.appendChild(newContent);
    
    for (let n in numbe){
      const newContent = document.createTextNode(numbe[n]);  
      newDiv1.appendChild(newContent);
    }
    
    for (let n in val){
        if (val[n] > 0){
            const newContent = document.createTextNode(val[n]);
            newDiv.appendChild(newContent);
        } else {
            const newContent = document.createTextNode(Array(2).fill('\xa0').join(''));
            newDiv.appendChild(newContent);
        }
      }

    currentDiv.appendChild(newDiv);
    currentDiv1.appendChild(newDiv1);
    currentDiv2.appendChild(newDiv2);
})();