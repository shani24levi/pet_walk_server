import {doApiGet} from "../../services/apiSer.js";
import { auth } from "../../services/authSer.js";
import { createPet } from "./petManager.js";


$(() => {
    init();
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
        let url = "http://localhost:5000/pets/ofUser";
        let data = await doApiGet(url);
        console.log(data);
        console.log(data.length);
        createPet(data , 0 , data.length);
    }
}

// const declareViewEvents = () => {
//     $("#id_start_walk").on("click", () => {
//         //lightBoxs()
//         //TODO: לעשות ולדיזאציה קצת יותר מורכבת 
//         sendEditData()
//     })
// }