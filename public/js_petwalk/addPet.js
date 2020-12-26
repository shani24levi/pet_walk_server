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
        console.log(newPet.name)
    })

    $("select").change(()=>{
        console.log($("#id_type option:selected").val())
    });
    
});


