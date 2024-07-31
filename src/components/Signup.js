import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstNameInpuRef = useRef();
    let lastNameInputRef = useRef();
    let maleRBRef =useRef();
    let femaleRBRef =useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileNumberInputRef= useRef();
    let profilePicInputRef = useRef();
    let stateSelectRef = useRef();
    let resultParaRef = useRef();
    let firstNameResultInpuRef = useRef();
    let lastNameResultRef = useRef();
    let ageResultRef = useRef();
    let emailResultRef = useRef();
    let passwordResultRef = useRef();
    let mobileNumberResultRef= useRef();
    let profilePicREsultRef = useRef();
    let nameRegEx =/^[a-zA-Z ]{2,30}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let ageRegex = /^(100|[1-9]\d?)$/;
    let indiaPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
    let selectGender;
    let selectedMS;
    
    
    //namevalidation
    let validateName =(nameStr,resultRef)=>{
        let result = nameRegEx.test(nameStr)
        if(result){
            resultRef.current.innerHTML = "valid"
            resultRef.current.style.backgroundColor="green"
    
    
        }else{
             resultRef.current.innerHTML = "invalid"
            resultRef.current.style.backgroundColor="red"
    
        }
    

    }
      //password validation

   let validateEmail = (emailStr,resultRef)=>{
    let result = emailRegex.test(emailStr)

    if(result){
        resultRef.current.innerHTML = "valid"
        resultRef.current.style.backgroundColor="green"


    }else{
         resultRef.current.innerHTML = "invalid"
        resultRef.current.style.backgroundColor="red"

    }
   }
     //password validation

     let validatePassword = (passwordStr,resultRef)=>{
        let result = passwordRegex.test(passwordStr)
    
        if(result){
            resultRef.current.innerHTML = "valid"
            resultRef.current.style.backgroundColor="green"
    
    
        }else{
             resultRef.current.innerHTML = "invalid"
            resultRef.current.style.backgroundColor="red"
    
        }
       }
       //validation age
       let age = 50;
       let validateAge = (age,resultRef)=>{
    
        if(ageRegex.test(age)){
            resultRef.current.innerHTML = "valid"
            resultRef.current.style.backgroundColor="green"
       
        }else{
            resultRef.current.innerHTML = "invalid"
            resultRef.current.style.backgroundColor="red"
            

        }
       }
       //validationphone number
       let phone = "+919876543210";

       let validatePhoneNumber = (phone,resultRef)=>{
        if(indiaPhoneRegex.test(phone)){
               resultRef.current.innerHTML = "valid"
            resultRef.current.style.backgroundColor="green"

        }else{
            resultRef.current.innerHTML = "invalid"
            resultRef.current.style.backgroundColor="red"

        }
       }

    //onFocus
    let inputOnFocus = (inputRef,bgColor="aqua") =>{
        inputRef.current.style.backgroundColor=bgColor;
        
       }
    
    
        //onBlur
        let inputOnBlur = (inputRef) => {
            inputRef.current.style.backgroundColor="";
           
        }


        //createAccount
   
        let onCreateAccount = ()=>{
            if(stateSelectRef.current.value == "Select State"){
                alert("please select your state");

            }else{
                 let salutation;
                 if(selectGender == "male"){
                    salutation = "Mr."
                 }
                 if(selectGender == "female"){
                    salutation = "Miss."
                 }


                resultParaRef.current.innerHTML = `${salutation} ${firstNameInpuRef.current.value}
                ${lastNameInputRef.current.value} from ${stateSelectRef.current.value},
                 your account hasbeen created.`;

            }
           
        }
  return (
    <div>
        <form className='form'>
            <h2>Signup</h2>
            <div className='formDiv'>
                <label className='formLabel'>FirstName</label>
                <input type='text' ref={firstNameInpuRef}
                onFocus={()=>{
                    inputOnFocus(firstNameInpuRef)

                }}
                onChange={()=>{
                    validateName(firstNameInpuRef.current.value,firstNameResultInpuRef)

                }}
                onBlur={()=>{
                    inputOnBlur(firstNameInpuRef)
                }}
                ></input>
                 <span ref={firstNameResultInpuRef}></span>
            </div>
           
            <div className='formDiv'>
                <label className='formLabel'>LastName</label>
                <input type='text' ref={lastNameInputRef}
                 onFocus={()=>{
                    inputOnFocus(lastNameInputRef)

                }}
                onChange={()=>{
                    validateName(lastNameInputRef.current.value,lastNameResultRef)

                }}
                onBlur={()=>{
                    inputOnBlur(lastNameInputRef)
                }}></input>
                  <span ref={lastNameResultRef}></span>
               
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Gender</label>
                <input type='radio' name='gender' ref={maleRBRef}
                onChange={()=>{
                    if(maleRBRef.current.checked == true){
                        selectGender = "male"

                    }
                }} ></input>
                <label style={{width:"Auto"}}>Male</label>
                <input type='radio' name='gender' ref={femaleRBRef}
                 onChange={()=>{
                    if(femaleRBRef.current.checked == true){
                        selectGender = "female"

                    }
                }}></input>
                <label style={{width:"Auto"}}>Femele</label>
                <span></span>
               </div>
               <div className='formDiv'>
                <label className='formLabel'>Marital Status</label>
                <input type='radio' name='ms' 
                onChange={(eventObj)=>{
                    if(eventObj.target.checked == true){
                        selectedMS= "Single";

                    }

                }}></input>
                <label style={{width:"Auto"}}>Single</label>
                <input type='radio' name='ms'
                onChange={(eventObj)=>{
                    if(eventObj.target.checked == true){
                        selectedMS ="Married"

                    }
                    


                }}></input>
                <label style={{width:"Auto"}}>Married</label>
                <span></span>
               </div>
              
              
           <div className='formDiv'>
                <label className='formLabel'>Age</label>
                <input type='number' ref={ageInputRef}
                 onFocus={()=>{
                    inputOnFocus(ageInputRef)

                }}
                onChange={()=>{
                    validateAge(ageInputRef.current.value,ageResultRef)

                }}
                onBlur={()=>{
                    inputOnBlur(ageInputRef)
                }}></input>
                <span ref={ageResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>State</label>
                <select ref={stateSelectRef}>
                    <option>Select State</option>
                    <option>Jammku And Kashmir</option>
                    <option>Ladakh</option>
                    <option>Hariyana</option>
                    <option>Uttarakhand</option>
                    <option>UttarPradesh</option>
                    <option>Meghalaya</option>
                    <option>Mijoram</option>
                    <option>Manipur</option>
                    <option>Wesrbengal</option>
                    <option>Tripura</option>
                    <option>Goa</option>
                    <option>Maharastra</option>
                    <option>Madhyapradesh</option>
                    <option>Rajastan</option>
                    <option>Gujarat</option>
                    <option value="AP">AndraPradesh</option>
                    <option value="TG">Telangana</option>
                    <option>Tamilnadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    
                </select>
                <span></span>
            </div>
            
            <div className='formDiv'>
                <label className='formLabel'>Email</label>
                <input type='email' ref={emailInputRef}
                 onFocus={()=>{
                    inputOnFocus(emailInputRef)

                }}
                onChange={()=>{
                    validateEmail(emailInputRef.current.value,emailResultRef)

                }}
                onBlur={()=>{
                    inputOnBlur(emailInputRef)
                }}></input>
                 <span ref={emailResultRef}></span>
            </div>
           
            <div className='formDiv'>
                <label className='formLabel'>Password</label>
                <input type='password' ref={passwordInputRef}
                 onFocus={()=>{
                    inputOnFocus(passwordInputRef)

                }}
                onChange={()=>{
                    validatePassword(passwordInputRef.current.value,passwordResultRef)

                }}
                onBlur={()=>{
                    inputOnBlur(passwordInputRef)
                }}></input>
                 <span ref={passwordResultRef}></span>
            </div>
           
            <div className='formDiv'>
                <label className='formLabel' >Mobile.No</label>
                <input type='tel' ref={mobileNumberInputRef}
                 onFocus={()=>{
                    inputOnFocus(mobileNumberInputRef)

                }}
                onChange={()=>{
                    validatePhoneNumber(mobileNumberInputRef.current.value,mobileNumberResultRef)

                }}
                onBlur={()=>{
                    inputOnBlur(mobileNumberInputRef)
                }}></input>
                 <span ref={mobileNumberResultRef}></span>
            </div>
           
             <div className='formDiv'>
             <label className='formLabel'>Profile pic</label>
             <input ref={profilePicInputRef}
              onFocus={()=>{
                inputOnFocus(profilePicInputRef)

            }}
            onBlur={()=>{
                inputOnBlur(profilePicInputRef)
            }}></input>
             <span ref={profilePicREsultRef}></span>
             </div>
             
                <button type='button' onClick={()=>{
                    onCreateAccount();
                    
                }}>Create Account</button>
                <p ref={resultParaRef}></p>

        </form>
        
    </div>
  )
}

export default Signup