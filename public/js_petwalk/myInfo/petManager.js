import PetClass from "./petClass.js";

export const createPet = (_arr, i, dataLength) => {
  $("main .my_pets").html("");
  console.log('manager1',  dataLength);

  let pet = new PetClass("main .my_pets",_arr[i].type ,_arr[i].name ,_arr[i].age, _arr[i].dayPlan ,_arr[i].activityLevel, _arr[i].foodLevel, i, _arr, dataLength);

//  let pet = new PetClass("#id_row",_arr[i].img ,_arr[i].type ,_arr[i].name ,_arr[i].age, _arr[i].dayPlan, _arr[i].dayPlanLevel , _arr[i].activity, _arr[i].activityLevel, _arr[i].foodLevel );
  pet.render();

  //TODO: empty the parent
//   _ar.map(item => {
//    let img = item.person.squareImage;
//    let name = item.person.name;
//    let money = item.finalWorth;
//    let company = item.source;
//    let bio = item.bios[0];
//    let time = item.birthDate;
//     let pet = new PetClass("#id_row",img,name,money,company,bio,time);
//     pet.render()
//     console.log(item)
//   })
}