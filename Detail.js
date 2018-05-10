var events = require('events'),
    votes =  require('./votes');

    
    
    module.exports = class Detail extends events.EventEmitter{
        constructor(){
            super();
            this.array = new Array();
        }

        AddCandidate(name){
             this.array.push(new votes(name));
             this.emit('addnew');
        }
        
        AddVotes(name) {
            for (var i = 0; i < array.length; i++) {
                if(array[i].name==name)
                {
                    array[i].add();
                    this.emit('AddVotes');
                }
            }

        } 

         print(){
          console.log(`array:${this.array[0].name}`);
          this.emit('printarray');
        } 

        

         
    }