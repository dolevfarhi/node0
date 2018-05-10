var eventEmitter = require('events'),
    config =require('./config').events;
    
    module.exports = out =Array();
    const max = 3;
    module.exports = class Votes extends eventEmitter{
        constructor(name){
                super();
                this.name=name;
                this.votes = 0;

            this.on(config.ADD,()=>{
                if(this.votes>=max){
                    console.log(`Cannot Add ${this.name}, Max = ${max}`);
                    out.push(`Cannot Add ${this.name}, Max = ${max}`);
                }
                else{
                    this.votes++;
                    console.log(`Add ${this.name}`);
                    out.push(`Add ${this.name}`); 
                }
            });
            this.on("reset",()=>{
                console.log(`Reset ${this.name}`);
                out.push(`Reset ${this.name}`);
            });
            this.on("all",()=>{
                console.log(`Name: ${this.name} - Votes: ${this.votes}`);
                out.push(`Name: ${this.name} - Votes: ${this.votes}`);
            });

        }
        RESET(){
            this.votes=0;
            this.emit("reset");
        }
        
        ADD(){
            this.emit("add");
        }
        
        getData(){
        this.emit("all");
        }
}