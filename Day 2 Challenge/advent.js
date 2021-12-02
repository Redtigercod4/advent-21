const fs = require('fs')

    const data = fs.readFileSync('data.txt','utf8').toString().split('\n');
     console.log(data)

     let forward = 0, depth = 0, aim = 0, aimedDepth = 0;
for(let i = 0; i <= data.length; i++) {
    const command = data[i]?.split(' ');
    let direction = command?.[0];
    let amount = parseInt(command?.[1]);
    switch(direction) {
        case "forward":
            forward += amount;
            if(aim) aimedDepth += amount * aim;
            break;
        case "up":
            depth -= amount;
            aim -= amount;
            break;
        case "down":
            depth += amount;
            aim += amount;
            break;
    }
}
console.log("forward x depth:", forward * depth);
console.log("forward x aimedDepth:", forward * aimedDepth);