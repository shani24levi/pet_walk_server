
export const createPetProfile = (item) => {
  $("main .my_pet").html("");

  $("#PetPic").attr("src", `${item[0].img}`);
  // $("#PetPic").src(`${item.img}`);
  $("#id_name").html(`${item[0].name}`);
 
  $("#type").html(`${item[0].type}`);
  $("#gender").html(`${item[0].gender}`);
  $("#age").html(`${item[0].age}`);
  $("#foodLevel").html(`${item[0].foodLevel}`);
  $("#activityLevel").html(`${item[0].activityLevel}`);
  // $("#daylyLevel").html(`${item[0].dayPlanLevel}`);


  $("#collapseOne .card-body").html(`${item[0].dayPlan}`);
  $("#collapseTwo .card-body").html(`${item[0].hobbies}`);
  // $("#collapseThree .card-body").html(`${item[0].bio}`);
}
