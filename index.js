"use strict";

//Condition 1 Graduated or Not
let question = confirm("Are you graduated?");
if(question === false){
    alert("You're not allowed!");
}else{
    //Condition 2 Pass or Fail in subjects
    let myan = confirm("Pass or Fail in Myanmar?");
    let eng = confirm("Pass or Fail in English?");
    let math = confirm("Pass or Fail in Mathematic?");
    let chem = confirm("Pass or Fail in Chemistry?");
    let phy = confirm("Pass or Fail in Physics?");
    let bio = confirm("Pass or Fail in Biology?");

    if(myan === false || eng === false || math === false ||
        chem === false || phy === false || bio === false){
        alert("Fail");
    }else{
        //Condition 3 Marks
        let sub = 0;
        let total = 0;
        let invalid = false;
        
        while(sub<6){
            let marks = prompt("Enter your marks:");
            if(marks === ''){
                alert("Marks cannot be blank!"); 
                invalid = true;
                break;
            }else if(marks === null){
                alert("Marks cannot be Null!");
                invalid = true;
                break;  
            }else if(Number(marks).toString() === 'NaN'){
                alert("Marks cannot be NaN!");
                invalid = true;
                break;
            }else if(marks>100){
                alert("Marks cannot over 100.");
                invalid = true;
                break; 
            }else if(marks<0){
                alert("Marks cannot under 0."); 
                invalid = true;
                break;
            }else if(marks < 40){
                alert("Failed!");
                invalid = true;
                break;
            }
            sub ++;
            total += +marks;
        }

        if(invalid === true || sub < 6){
            alert("Not Allowed!");
        }else{
            alert(total);
            
            //Condition 4 Universities
            const UM = 500;
            const TU = 450;
            const GTC = 400;
            const CU = 350;
            const Day = 300;
            const Distance = 240;

            if(total >= UM){
                alert('Distance, Day, CU, GTC, TU, UM');
            }else if (total >= TU){
                alert('Distance, Day, CU, GTC, TU');
            }else if (total >= GTC){
                alert('Distance, Day, CU, GTC');
            }else if (total >= CU){
                alert('Distance, Day, CU');
            }else if (total >= Day){
                alert('Distance, Day');
            }else{
                alert('Distance');
            }
        }
    }
}










