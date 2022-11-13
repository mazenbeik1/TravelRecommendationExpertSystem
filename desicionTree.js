let choice;
function AfricaBtn_Clicked()
{
    
    clear();

    //Question
    let question = document.createElement("div");
    question.innerText="Which Language";   
    document.getElementById("DesicionQuestion").appendChild(question);

    //Answers
    
    Choice = document.createElement("button");
    Choice.innerText="Arabic";   
    Choice.onclick=function(){ArabicBtn_Clicked()};
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);

    
    Choice = document.createElement("button");
    Choice.innerText="Nigerian";   
    Choice.onclick=function(){NigerianBtn_Clicked()};
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);
}
    
function ArabicBtn_Clicked()
{
    clear();

    let question = document.createElement("div");
    question.innerText="Results";   
    document.getElementById("DesicionQuestion").appendChild(question);

    Choice = document.createElement("button");
    Choice.innerText="Egypt";
    Choice.className="DesicionTreeChoice";
    Choice.onclick= function(){EgyptBtn_Clicked()};
    document.getElementById("DesicionChoices").appendChild(Choice);

    Choice = document.createElement("button");
    Choice.innerText="Sudan";
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);

    Choice = document.createElement("button");
    Choice.innerText="Libya";
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);

    Choice = document.createElement("button");
    Choice.innerText="Algeria";
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);
}

function EgyptBtn_Clicked()
{
    window.open("https://www.turkishairlines.com/en-tr/flights/booking/availability-international/?cId=e54c7647-f211-499a-9628-297007fd445a");
}

function NigerianBtn_Clicked()
{
    clear();

    let question = document.createElement("div");
    question.innerText="Results";   
    document.getElementById("DesicionQuestion").appendChild(question);
    
    Choice = document.createElement("button");
    Choice.innerText="Nigeria";
    Choice.className="DesicionTreeChoice";
    document.getElementById("DesicionChoices").appendChild(Choice);
}

function NoData_Clicked()
{
    clear();

    let question = document.createElement("div");
    question.innerText="NO DATA";   
    document.getElementById("DesicionQuestion").appendChild(question);
}

function clear()
{
    document.getElementById("DesicionQuestion").innerHTML="";
    document.getElementById("DesicionChoices").innerHTML="";
}