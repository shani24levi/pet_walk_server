let newPet={
    name:"",
    type:"",
    gender:"",
    age:0,
    weight:0,
    day_plan:"",
    day_plan_level:"",
    activity:"",
    food:"",
    hobbies:""
}

const url=

$(()=>{
    $("#id_name").on("input",()=>{
        newPet.name=$("#id_name").val()
    })

    $("#id_type").change(()=>{
        newPet.type=$("#id_type option:selected").val()
    });
    
    $("#id_gender").change(()=>{
        newPet.gender=$("#id_gender option:selected").val()
    });

    $("#id_age").on("input",()=>{
        newPet.age=$("#id_age").val() 
    })

    $("#id_weight").on("input",()=>{
        newPet.weight=$("#id_weight").val()
    })

    $("#id_dayPlan").on("input",()=>{
        newPet.day_plan=$("#id_dayPlan").val()
    })

    $("#id_dayPlanLevel").on("input",()=>{
        newPet.day_plan_level=$("#id_dayPlanLevel").val()
    })

    $("#id_activityLevel").on("input",()=>{
        newPet.activity=$("#id_activityLevel").val()
    })

    $("#id_foodLevel").on("input",()=>{
        newPet.food=$("#id_foodLevel").val()
    })

    $("#id_hobbies").on("input",()=>{
        newPet.hobbies=$("#id_hobbies").val()
    })

    $("#add_pet_button").on("click",()=>{
        console.log("sending data")
        axios({
            method:'POST',
            url:"http://localhost:5000/users",
            data:newPet,
            headers: {
                "x-auth-token": localStorage["token"],
            }
        })
        .then(myData=>{
            window.location.href = "petProfile.html";
        })
        .catch(error=>{
            console.log(newPet);
            console.log(error.response); 
        })
    })
});


