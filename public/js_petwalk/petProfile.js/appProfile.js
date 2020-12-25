import { doApiGet } from "../../services/apiSer.js";
// import { createPet } from "./petManager.js";


$(() => {
    init();
})

let petId ,petName;
export const getPetProfile = (id,myName) => {
    petId=id;
    petName= myName;
}


const init = async () => {
    $("header #pet_name").html(`${petName} Profile`);


    $("main .my_pet").html(`
    <div></div>
    <div class="text-center mr-3 w-100">
      <img src="images/loading-dog.gif" width="200" >    
      </div>
      <div></div>`);

    let url = `http://localhost:5000/pets/ofUser/${petId}`;
    let data = await doApiGet(url);
    console.log(data);
    createPetProfile(data);
}