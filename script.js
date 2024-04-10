let options=document.querySelectorAll("img");
let msg=document.querySelector("#msg");
let user_score=document.querySelector("#player_score");
let comp_score=document.querySelector("#comp_score");
let reset=document.querySelector("#reset");


let gen_choice=()=>{
    choices=["Stone","Paper","Scissor"];
    let index=Math.floor(Math.random()*3);  //Random number generate and used as index for above array;
    return choices[index];
}

let user_points=0;
let comp_points=0;
let print_winner=(user_win,user_choice,comp_choice)=>{
    if(user_win===1){
        msg.innerText=`You Win! your ${user_choice} beats Computer ${comp_choice}`;  
        user_points++;
        user_score.innerText=user_points;
        msg.style.backgroundColor="green";
    }else if(user_win===2){
        msg.innerText=`You Lose! Computer ${comp_choice} beats your ${user_choice}`;
        comp_points++;
        comp_score.innerText=comp_points;
        msg.style.backgroundColor="red";
    }else{
        msg.innerText=`Match Draw! your choice is ${user_choice} matches Comp choice ${comp_choice}`;
        msg.style.backgroundColor="rgb(148, 177, 46)";
    }

}

let user_win=0;
let check_winner=(user_choice,comp_choice)=>{
    if(user_choice===comp_choice)
    {
        user_win=0;

    }else if(user_choice==="Stone"){
        if(comp_choice==="Scissor")
        {
           user_win=1;
        }
        else{
            user_win=2;
        }
    }else if(user_choice==="Paper"){
        if(comp_choice==="Stone")
        {
            user_win=1;
        }
        else{
            user_win=2;
        }
    }else{                                //user choice is Scissor
        if(comp_choice==="Paper")
        {
            user_win=1;
        }
        else{
            user_win=2;
        }
    }
    print_winner(user_win,user_choice,comp_choice);
}

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        let user_choice=option.getAttribute("id");   //id name is Stone,Paper,Scissor so we get id(user choice)
        let comp_choice=gen_choice();                //call gen_choice() fun to genterate comp choice
        console.log(user_choice);
        console.log(comp_choice);
        check_winner(user_choice,comp_choice);
    })
});

reset.onclick=()=>{
    user_points=0;
    comp_points=0;  
    user_score.innerText=user_points; 
    comp_score.innerText=comp_points;
    msg.style.backgroundColor="rgb(148, 177, 46)";
    msg.innerText="Choose Your Weapon";
}