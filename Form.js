class Form{
    constructor(){
        this.input = createInput("Enter Name");
        this.button = createButton("VOTE");

        this.button1 = createButton("YES");
        this.button2 = createButton("NO");

        this.button3 = createButton("YES");
        this.button4 = createButton("NO");

        this.button5 = createButton("YES");
        this.button6 = createButton("NO");

        this.button7 = createButton("OVER");
        this.button8 = createButton("RESULT");
    }

    hide(){
        this.input.hide();
        this.button.hide();

        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();

        this.button7.hide();
        this.button8.hide();
    }

    show(){
        this.input.show();
        this.button.show();

        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.button4.show();
        this.button5.show();
        this.button6.show();
        
        this.button7.show();
        this.button8.show();
    }

    display(){
        var title = createElement('h2');
        title.html("Vote for your society");
        title.position(400,0);

        this.input.position(80,160);
        this.button.position(190,200);
        
        this.button.mousePressed(()=>{

            poll.update(1);

            this.button1.position(400,175);
            this.button2.position(550,175);

            this.button3.position(400,250);
            this.button4.position(550,250);

            this.button5.position(400,325);
            this.button6.position(550,325);

            this.button7.position(450,400);
            this.button8.position(500,400);

            this.input.hide();
            this.button.hide();

            this.button1.show();
            this.button2.show();
            this.button3.show();
            this.button4.show();
            this.button5.show();
            this.button6.show();

            voter.name = this.input.value();
            voterCount = voterCount + 1;

            voter.index = voterCount;

            voter.update();
            voter.updateCount(voterCount);
        })
        this.button1.mousePressed(()=>{
            yes1 = yes1 + 1;
        })
        this.button2.mousePressed(()=>{
            no1 = no1 + 1;
        })
        this.button3.mousePressed(()=>{
            yes2 = yes2 + 1;
        })
        this.button4.mousePressed(()=>{
            no2 = no2 + 1;
        })
        this.button5.mousePressed(()=>{
            yes3 = yes3 + 1;
        })
        this.button6.mousePressed(()=>{
            no3 = no3 + 1;
        })
        this.button7.mousePressed(()=>{

            poll.update(0);
                
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();

            this.button.show();
            this.input.show();
        })

        this.button8.mousePressed(()=>{
            poll.update(2);

            this.input.hide();
            this.button.hide();

            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();

              
            if (yes1 > no1) {
                textSize(15);
                text("YES", 200, 75);
                text("YES: " + yes1 + "; NO: " + no1,200,100);
            }
            if(no1>yes1){
                textSize(15);
                text("NO", 200, 75);
                text("NO: " + no1 + "; YES: " + yes1,200,100);
            }
            if(yes1===no1){
                textSize(15);
                text("EQUAL",200,75);
                text("YES: " + yes1 + "; NO: " + no1,200,100);
            }

            if(yes2>no2){
                textSize(15);
                text("YES", 200, 150);
                text("YES: " + yes2 + "; NO: " + no2,200,175);
            }
            if(no2>yes2){
                textSize(15);
                text("NO", 200, 150);
                text("NO: " + no2 + "; YES: " + yes2,200,175);
            }
            if(yes2===no2){
                textSize(15);
                text("EQUAL",200,150);
                text("YES: " + yes3 + "; NO: " + no3,200,175);
            }

            if(yes3>no3){
                textSize(15);
                text("YES",200,225);
                text("YES: " + yes3 + "; NO: " + no3,200,250);
            }
            if(no3>yes3){
                textSize(15);
                text("NO",200,225);
                text("NO: " + no3 + "; YES: " + yes3,200,250);
            }
            
            if(yes3===no3){
                textSize(15);
                text("EQUAL",200,225);
                text("YES: " + yes3 + "; NO: " + no3,200,250);
            }
        })
    }
}


