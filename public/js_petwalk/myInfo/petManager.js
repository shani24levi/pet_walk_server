import PetClass from "./petClass.js";

export const createPet = (_arr, i, dataLength) => {
  $("main .my_pets").html("");

  console.log(_arr[i].img);
  let pet = new PetClass("main .my_pets",_arr[i].img ,_arr[i].type ,_arr[i].name ,_arr[i].age, _arr[i].dayPlan ,_arr[i].activityLevel, _arr[i].foodLevel,_arr[i].dayPlanLevel,_arr[i].currDayPlanLevel,_arr[i].currActivityLevel,_arr[i].currFoodLevel, i, _arr, dataLength, _arr[i]._id);
  pet.render();
}

export const createPet2 = (_arr, i, dataLength) => {
  $("main .my_pets").html("");
  console.log(_arr[i].img);
  $("main .my_pets").html(_arr[i].img);

}