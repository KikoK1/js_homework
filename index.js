"use strict";

const UM = "University of Medicine";
const TU = "Technological University";
const GTC = "Government Technological College";
const CU = "University of Computer Studies";
const Day = "Day Universities";
const Distance = "Distance Universities";

//Condition_1 Graduated or Not
let question = confirm("Are you graduated?");
if(question === false){
    alert("You're not allowed!");
}else{
    //Condition_2 Pass or Fail in subjects
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
        //Condition_3 Marks
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
            
            //Condition_4 Universities

            if(total >= 500){
                alert(`Available Universities List:
                - ${UM}
                - ${TU}
                - ${GTC}
                - ${CU}
                - ${Day}
                - ${Distance}`);
            }else if (total >= 450){
                alert(`Available Universities List:
                - ${TU}
                - ${GTC}
                - ${CU}
                - ${Day}
                - ${Distance}`);
            }else if (total >= 400){
                alert(`Available Universities List:
                - ${GTC}
                - ${CU}
                - ${Day}
                - ${Distance}`);
            }else if (total >= 350){
                alert(`Available Universities List:
                - ${CU}
                - ${Day}
                - ${Distance}`);
            }else if (total >= 300){
                alert(`Available Universities List:
                - ${Day}
                - ${Distance}`);
            }else{
                alert(`Available University List:
                - ${Distance}`);
            }
        }
    }
}










