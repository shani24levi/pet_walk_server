import { doApiGet } from "../services/apiSer.js";
import { getLocalStorag } from "./petProfile/appProfile.js";


$(() => {
    init()
})

const setFormVals = (data) => {
    let dataBody = {
        name: $("#id_name").val(data[0].name),
        img: $(".edit_form img").attr("src", `${data[0].img}`),
        type: $("#id_type").val(data[0].type),
        gender: $("#id_gender").val(data[0].gender),
        age: $("#id_age").val(data[0].age),
        weight: $("#id_weight").val(data[0].weight),
        dayPlan: $("#id_dayPlan").val(data[0].dayPlan),
        // name: $("#id_dayPlanLevel").val(data[0].name),
        activityLevel: $("#id_activityLevel").val(data[0].activityLevel),
        foodLevel: $("#id_foodLevel").val(data[0].foodLevel),
        hobbies: $("#id_hobbies").val(data[0].hobbies)
        // name: $("#id_bio").val(data[0].name),
    }
}


const init = async () => {
    let pet = getLocalStorag();
    //set val from db into form vals:
    let url = `http://localhost:5000/pets/ofUser/${pet.id}`;
    let data = await doApiGet(url);
    console.log(data);
    setFormVals(data);

    $("#id_form").on("submit", (evt) => {
        console.log("works");
        evt.preventDefault();
        let myUrl = "http://localhost:5000/users";

        // let myUrl = "/users/login";
        let ifSend = true;

        let dataBody = {
            name: $("#id_name").val(),
            img: $("#formFile").val(),  // .attr("src", `${data[0].img}`),
            type: $("#id_type").val(),
            gender: $("#id_gender").val(),
            age: $("#id_age").val(),
            weight: $("#id_weight").val(),
            dayPlan: $("#id_dayPlan").val(),
            // name: $("#id_dayPlanLevel").val(),
            activityLevel: $("#id_activityLevel").val(),
            foodLevel: $("#id_foodLevel").val(),
            hobbies: $("#id_hobbies").val()
            // name: $("#id_bio").val(),
        }

        if (dataBody.name == '') {
            $("#id_name").next().removeClass("d-none");
            ifSend = false;
        }

        if (dataBody.img == '') {
            $("#formFiles").val();
            $(".edit_form img").attr("src", `${data[0].img}`);
        }

        if (dataBody.type == '') {
            $("#id_type").next().removeClass("d-none");
            ifSend = false;
        }

        if (dataBody.age == '') {
            $("#id_age").next().removeClass("d-none");
            ifSend = false;
        }


        if (dataBody.dayPlan == '') {
            $("#id_dayPlan").next().removeClass("d-none");
            ifSend = false;
        }

        if (dataBody.activityLevel == '') {
            $("#id_activityLevel").next().removeClass("d-none");
            ifSend = false;
        }

        if (dataBody.foodLevel == '') {
            $("#id_foodLevel").next().removeClass("d-none");
            ifSend = false;
        }

        if (dataBody.dayPlanLevel == '') {
            $("#id_dayPlanLevel").next().removeClass("d-none");
            ifSend = false;
        }


        if (ifSend) {
            axios({
                method: 'PUT',
                url: myUrl,
                data: dataBody,
                headers: {
                    "x-auth-token": localStorage["token"],
                }
            })
                .then(myData => {
                    window.location.href = "petProfile.html";
                })
                .catch(error => {
                    console.log(dataBody);
                    console.log(error.response);

                    if (error.response.status == Number(401)) {
                        $("#id_name").next().next().removeClass("d-none");
                    }
                    if (error.response.status == 400) {
                        $("#id_name").next().next().removeClass("d-none");
                    }
                    if (error.response.status == 500) {
                        alert("Server Error , Try later");
                    }
                })
        }
    })

    $("#id_form .form_div input").on("focus", function () {
        $(this).next().next().addClass("d-none");
        $(this).next().addClass("d-none");
    })
}