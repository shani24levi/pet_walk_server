import { doApiGet } from "../../services/apiSer.js";
import { createPetProfile } from "./profileManager.js";


$(() => {
    init();
    clearLocalStorag();
    deletePet();
})

const clearLocalStorag = () => {
    $("#id_clear_storag").on("click", () => {
        localStorage.removeItem('petName');
        localStorage.removeItem('petId');
    })
}

export const getLocalStorag = () => {
    let pet = {
        neme: localStorage.getItem('petName'),
        id: localStorage.getItem('petId')
    }
    return pet;
}

//do to- testing the butoon delete
const deletePet = async () => {
    $("#id_delete").on("click", () => {
        alert("Are you sure?!");
        if (alert) {
            let pet = getLocalStorag();
            let myUrl = `/pets/${pet.id}`;
            // let myUrl = `http://localhost:5000/pets/${pet.id}`;
            axios({
                method: 'DELETE',
                url: myUrl,
                headers: {
                    "x-auth-token": localStorage["token"]
                }
            })
                .then(myData => {
                    alert(`${pet.neme} has been deleted`);
                    clearLocalStorag();
                    window.location.href = "myPets.html";
                })
                .catch(error => {
                    console.log(error.response);
                    if (error.response.status == Number(401)) {
                        alert("Pet is not found");
                    }
                    if (error.response.status == 500) {
                        alert("Server Error , Try later");
                    }
                })
        }
    })
}

const init = async () => {
    let pet = getLocalStorag();
    let name = pet.neme;

    $("header #pet_name").html(`${name} Profile`);

    $("main .my_pet").html(`
    <div></div>
    <div class="text-center mr-3 w-100">
      <img src="images/loading-dog.gif" width="200" >    
      </div>
      <div></div>`);

    let url = `/pets/ofUser/${pet.id}`;
    // let url = `http://localhost:5000/pets/ofUser/${pet.id}`;
    let data = await doApiGet(url);
    console.log(data);
    createPetProfile(data);
}