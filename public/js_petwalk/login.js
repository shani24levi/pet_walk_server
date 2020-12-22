$(() => {
    // TODO: אם המשתמש כבר מחובר לשגר אותו ל
    // MYINFO
    init()
})

const init = () => {
    $("#id_form").on("submit", (evt) => {
        console.log("works");
        evt.preventDefault();
        let myUrl = "/users/login/";
        let ifSend = true;

        let dataBody = {
            email: $("#id_email").val(),
            pass: $("#id_pass").val()
        }

        if (dataBody.email == '') {
            $("#id_email").next().next().removeClass("d-none");
            ifSend = false;
        }
        // else if(!dataBody.email.includes("@") || !email.includes(".")) {
        //     $("#id_email").next().removeClass("d-none")
        //     ifSend = false;
        // }

        if (dataBody.pass == '') {
            $("#id_pass").next().next().removeClass("d-none");
            ifSend = false;
        }


        if (ifSend) {
            axios({
                method: 'POST',
                url: myUrl,
                data: dataBody
            })
                .then(myData => {
                    console.log(myData.data.token);
                    // שומר את הטוקן על המחשב של הלקוח
                    localStorage.setItem("token", myData.data.token);
                    window.location.href = "myInfo.html";
                })
                .catch(error => {
                    console.log(dataBody);
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(typeof error.response.status);


                    if (error.response.status == Number(401)) {
                        console.log("holle");
                        $("#id_email .nf").removeClass("d-none");
                    }
                    if (error.response.status == 400) {
                        $("#id_pass").next().next().removeClass("d-none");
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