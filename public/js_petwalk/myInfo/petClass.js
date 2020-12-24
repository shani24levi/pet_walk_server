import { createPet } from "./petManager.js";

class PetClass {
    constructor(_parent, _type, _name, _age, _dayPlan, _activityLevel, _foodLevel, _i, _ar, _dataLength) {
        this.parent = _parent;
        //    this.img = (!_img.includes("https:")) ? "https:"+_img : _img;
        this.type = _type;
        this.name = _name;
        this.age = (!_age) ? "Live For Ever" : _age;
        this.dayPlan = _dayPlan;
        this.activityLevel = _activityLevel;
        this.foodLevel = _foodLevel;
        this.i = _i;
        this.lenthData = _dataLength-1;
        this.ar = _ar;

    }

    render() {
        let newDiv = $("<div class='row p-3 justify-content-between btn_section'></div>");
        $(this.parent).append(newDiv);

        //left btn 
        let btnLeft = $(`<div class="col-1 align-self-center">
            <i class="fa fa-chevron-left" style="font-size: 200%; color: #6EA8FF; cursor:pointer" aria-hidden="true"></i>
            </div>`);
        $(newDiv).append(btnLeft);

        $(btnLeft).on("click", () => {
            if (this.i <= this.lenthData && this.i != 0) {
                createPet(this.ar, this.i-1, this.lenthData+1);
            }
            if (this.i == 0) {
                createPet(this.ar, this.lenthData, this.lenthData+1);
            }
            //else dose nothing 
        })

        $(newDiv).append(`
        <div class="col-4 d-flex justify-content-center">
            <img src="${this.img}"
            alt="Avatar" class="img_pet" style="border: #fff solid; border-radius: 50%; padding: 5%;">
        </div>
        <div class="col-4 justify-content-center">
            <h5 class="pt-4 pl-2" style="color: #727377;"> ${this.type}</h5>
            <h2 class="pl-2">${this.name}</h2>
            <h5 class="pb-2 pl-2" style="color: #727377;">${this.age}</h5>
        </div>
        `)

        //right btn 
        let btnRight = $(` <div class="col-1 align-self-center">
            <i class="fa fa-chevron-right" style="font-size: 200%; color: #6EA8FF; cursor:pointer" aria-hidden="true"></i>
        </div>`);
        $(newDiv).append(btnRight);

        $(btnRight).on("click", () => {
            if (this.i < this.lenthData && this.i != this.lenthData) {
                createPet(this.ar, this.i+1, this.lenthData+1);
            }
            if (this.i == this.lenthData) {
                createPet(this.ar, 0 , this.lenthData+1);
            }
            //else dose nothing 
        })



        let secDiv = $("<div class='secDiv'></div>");
        $(this.parent).append(secDiv);

        $(secDiv).append(`<h3 class="mt-4 pb-2">State</h3>`)

        let insidDiv = $("<div class='row p-3 justify-content-between btn_section' style='box-shadow:none'></div>");
        $(secDiv).append(insidDiv);

        $(insidDiv).append(`<div class="col-6 align-self-center p-2">
            <h4><strong>Today's Plans</strong></h4>
            <h5>10%</h5>
        </div>`)

        let pricentDiv = $("<div class='col-4 align-self-center text-center demo'></div>");
        $(insidDiv).append(pricentDiv);

        //pricent btn 
        let btnPricent = $(` 
        <div class="demo-1 align-self-center text-center" data-percent="65"></div>
        `);
        $(pricentDiv).append(btnPricent);

        $(pricentDiv).on("click", () => {
            console.log('upate peicent');
            //else dose nothing 
        })



        let insidDiv2 = $("<div class='row p-3 my-3 justify-content-between btn_section' style='box-shadow:none'></div>");
        $(secDiv).append(insidDiv2);

        $(insidDiv2).append(`<div class="col-6 align-self-center p-2">
            <h4><strong>Energy avaliable</strong></h4>
            <h5>10%</h5>
        </div>`)

        let pricentDiv2 = $("<div class='col-4 align-self-center text-center demo'></div>");
        $(insidDiv2).append(pricentDiv2);

        //pricent btn 
        let btnPricent2 = $(` 
        <div class="demo-1 align-self-center text-center" data-percent="65"></div>
        `);
        $(pricentDiv2).append(btnPricent2);

        $(btnPricent2).on("click", () => {
            console.log('upate peicent');
            //else dose nothing 
        })


        let insidDiv3 = $("<div class='row p-3 justify-content-between btn_section' style='box-shadow:none'></div>");
        $(secDiv).append(insidDiv3);


        $(insidDiv3).append(`<div class="col-6 align-self-center p-2">
        <h4><strong>Weekly objectives</strong></h4>
        <h5>2 walks left</h5>
    </div>`)

        let pricentDiv3 = $("<div class='col-4 align-self-center text-center demo'></div>");
        $(insidDiv3).append(pricentDiv3);

        //pricent btn 
        let btnPricent3 = $(` 
    <div class="demo-1 align-self-center text-center" data-percent="65"></div>
    `);
        $(pricentDiv3).append(btnPricent3);

        $(pricentDiv3).on("click", () => {
            console.log('upate peicent');
            //else dose nothing 
        })





        let walkDiv = $("<div class='col-auto text-center'></div>");
        $(this.parent).append(walkDiv);

        //walk btn 
        let walkBtn = $(` 
        <button id="id_start_walk" type="submit" class="btn btn-lg btns_blue my-4 w-75">Start a
        Walk</button>        
        `);
        $(walkDiv).append(walkBtn);

        $(walkBtn).on("click", () => {
            console.log('upate walk');
            //else dose nothing 
        })
    }
}

export default PetClass;