import ProfileClass from "./profileClass";

export const createPet = (_arr) => {
  $("main .my_pet").html("");

  _arr.map(item => {
    let pet = new ProfileClass("main .my_pet",_arr[i].img ,_arr[i].type ,_arr[i].name ,_arr[i].age, _arr[i].dayPlan ,_arr[i].activityLevel, _arr[i].foodLevel);
    pet.render();
  })
}
