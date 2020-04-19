class Poll{
    constructor(){
    }

    getState(){
        var pollStateRef = database.ref('pollState');
        pollStateRef.on("value",function (data) {
            pollState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            pollState: state
        })
    }

    async start(){
        if(pollState === 0){
            voter = new Voter();
            var voterCountRef = await database.ref('voterCount').once("value");
            if(voterCountRef.exists()){
                voterCount = voterCountRef.val();
                voter.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Poll starts", 120, 100);
        Voter.getVoterInfo();
        if(allVoters!==undefined){
            var display_position = 130;
            for(var plr in allVoters){
                if(plr === "voter" + voter.index)
                    fill("red");
                else
                    fill("black");
            }
        }
    }
}