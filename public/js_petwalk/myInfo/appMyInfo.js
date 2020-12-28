import { doApiGet } from "../../services/apiSer.js";
import { auth } from "../../services/authSer.js";
import { createPet } from "./petManager.js";
import { } from '../../plugs/lightBox.js';

$(() => {
  init();
  $(document).lightBox();
  //declareViewEvents();
})

const init = async () => {
  $("main .my_pets").html(`
    <div></div>
    <div class="text-center mr-3 w-100">
      <img src="images/loading-dog.gif" width="200" >    
      </div>
      <div></div>`);

  let data = await auth();
  console.log(data);
  if (data.status == "ok") {
    let url = "/pets/ofUser";
    //let url = "http://localhost:5000/pets/ofUser";
    let data = await doApiGet(url);
    console.log(data);
    console.log(data.length);
    createPet(data, 0, data.length);
  }
}

export const updatMyInfo = async (updateOne) => {
  $("main .my_pets").html(`
  <div></div>
  <div class="text-center mr-3 w-100">
    <img src="images/loading-dog.gif" width="200" >    
    </div>
    <div></div>`);

    let pet = {
      neme: localStorage.getItem('petName'),
      id: localStorage.getItem('petId'),
      update: localStorage.getItem('update'),
      index :localStorage.getItem('index')
  }

    //get pet information:
    let url = `/pets/ofUser/${pet.id}`;
    let data = await doApiGet(url);

    let dataBodyVal = {
      id: pet.id, //requird for edting in server 
      name: data[0].name,
      type: data[0].type,
      dayPlan: data[0].dayPlan,
      dayPlanLevel: data[0].dayPlanLevel,
      activityLevel: data[0].activityLevel,
      foodLevel: data[0].foodLevel
  }

  //set the value to update
  if(pet.update == 'currDayPlanLevel') dataBodyVal.currDayPlanLevel= updateOne;
  else if(pet.update == 'currActivityLevel') dataBodyVal.currActivityLevel= updateOne;
  else if(pet.update== 'currFoodLevel') dataBodyVal.currFoodLevel= updateOne;

  console.log(dataBodyVal);

  //update
    let urlUpdate = "/pets/ofUser";
    axios({
      method: 'PUT',
      url: urlUpdate,
      data: dataBodyVal,
      headers: {
        "x-auth-token": localStorage["token"],
      }
    })
      .then(myData => {
        console.log('updated');
        createPet(data, pet.index, data.length);
      })
      .catch(error => {
        console.log(dataBodyVal);
        console.log(error.response);

        if (error.response.status == 500) {
          alert("Server Error , Try later");
        }
      })
    
}




// const declareViewEvents = () => {
//     $("#id_start_walk").on("click", () => {
//         //lightBoxs()
//         sendEditData()
//     })
// }

