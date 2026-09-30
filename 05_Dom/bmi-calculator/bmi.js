const form=document.querySelector("form")

// this usecase will give you empty because you want the value at the time of the event(sumbition)
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)

    const result=document.querySelector("#results")

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML=`please enter the valid height ${height}`
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter the valid weight ${weight}`
    }
    else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         let message;
         
         if (bmi<18.6) {
             message=`<p>under weight</p>`
            }else if(bmi>18.6 && bmi<24.9){
                message=`<p>normal range</p>`
            }else{
                message=`<p>over weight</p>`
            }
            
            result.innerHTML=`<span>your bmi is ${bmi}</span>
            <p>${message}</p>`
      
          

    }
});