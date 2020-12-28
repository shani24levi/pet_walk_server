import {updatMyInfo} from "../js_petwalk/myInfo/appMyInfo.js";

$.fn.lightBox = function () {
  createLightBox();

  $(".light_box .b-close").on("click", function () {
    closeLightBox();
  })

  $(".light_box #minus-btn").on("click", function () {
    minos();
  })
  $(".light_box #plus-btn").on("click", function () {
    plus();
  })

  $('#qty_input').prop('disabled', true);

  $("#data-light").on("click", function () {
    console.log("aaaa")
    let imgSrc = $(this).attr("data-percent");
    let imgAlt = $(this).attr("data-alt");
    showLightBox(imgSrc, imgAlt);
  })
}

const showLightBox = (_img, _txt) => {
  $(".light_box .light_img").attr("value", _img);
  $(".light_box .light_txt").html(_txt);


  $(".light_box").fadeIn(700);
  $(".light_box").css("display", "flex");
}

const closeLightBox = () => {
  $(".light_box").fadeOut(700);
  let name= $(this).attr("data-name");
  let id= $(this).attr("data-id");
  let this1= $(this).attr("data-this");


  console.log('id', id);
  console.log('name',name);
  console.log('this',$(this).attr("data-this"));
  console.log(this1);

  updatMyInfo($(this).attr("data-name"),$(this).attr("data-id"),$(this).attr("data-this"),$(this).attr("data-i"));
}

const minos = () => {
  $('#minus-btn').click(function () {
    $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
    if ($('#qty_input').val() == 0) {
      $('#qty_input').val(1);
    }
  });
}


const plus = () => {
  $('#plus-btn').click(function () {
    $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
    log($('#qty_input').val());
    if ($('#qty_input').val() == 101) {
      $('#qty_input').val(100);
    }
  });
}



const createLightBox = () => {
  $("body").prepend(`
  <div class="light_box">
    <div class="light_inside">

      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-dark btn-sm mr-2" id="minus-btn" style="border-radius: 50%; background-color: #6EA8FF"><i class="fa fa-minus" style="font-size:40px;"></i></button>
                </div>
                <input type="number" id="qty_input" class="light_img form-control form-control-sm text-center" style="font-size:20px" value="1" min="1">
                <div class="input-group-prepend">
                    <button class="btn btn-dark btn-sm ml-2" id="plus-btn" style="border-radius: 50%; background-color: #6EA8FF"><i class="fa fa-plus" style="font-size:40px;"></i></button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <p class="light_txt">test</p>
      <button class="b-close" style="background-color:red;"><i class="fa fa-times" aria-hidden="true" style="font-size:40px;" ></i></button>
    </div>
  </div>
  `)

  // const createLightBox = () => {
  //   $("body").prepend(`
  //   <div class="light_box">
  //   <div class="light_inside">
  //     <img class="light_img" src="" class="float-left mr-2 w-50">
  //     <p class="light_txt">test</p>
  //     <button>Close</button>
  //   </div>
  // </div>
  //   `)


  let lightCss = {
    position: "fixed",
    display: "none",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    padding: "8px"
  }
  $(".light_box").css(lightCss);

  let insideCss = {
    maxWidth: "600px",
    width: "100%",
    background: "white",
    border: "2px solid grey",
    minHeight: "300px",
    padding: "8px",
    textAlign: "center"
  }
  $(".light_inside").css(insideCss);
}
