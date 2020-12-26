let newPet={
    name:"",
    gender:"",
    type:"",
    age:0,
    weight:0,
    hobbies:[String]
}

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
        newPet.weight=$("#id_wight").val()
    })
});


