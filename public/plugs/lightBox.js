
$.fn.lightBox = function(){
  createLightBox();

  $(".light_box button").on("click",function(){
    closeLightBox();
  })

  $(".light_box").on("click",function(){
    closeLightBox();
  })

 //only img with data-light shows
  $("div[data-light]").on("click",function(){

    // let imgSrc = $(this).attr("src");
    let imgSrc = $(this).attr("data-address");
    let imgAlt = $(this).attr("data-address");
    showLightBox(imgSrc,imgAlt);
  })
}

const showLightBox = (_img,_txt) => {
  $(".light_box .light_img").attr("src",_img);
  $(".light_box .light_txt").html(_txt);


  $(".light_box").fadeIn(700);
  $(".light_box").css("display", "flex");
}

const closeLightBox = () => {
  $(".light_box").fadeOut(700);
}
 

const createLightBox = () => {
  $("body").prepend(`
  <div class="light_box">
  <div class="light_inside">
    <img class="light_img" src="" class="float-left mr-2" style="width:100%">
    <button class="close_btn"><i class="fa fa-times" aria-hidden="true"></i></button>
  </div>
</div>
  `)


  let closeCss={
    borderRadius: "50%",
    position: "absolute",
    marginTop: "-20px",
    marginLeft: "-10px"
  }
  $(".close_btn").css(closeCss);


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
    width: "80%",
    background: "white",
    border: "2px solid grey",
    padding:"8px",
    textAlign:"center"
    // height:"300px"
  }

  $(".light_inside").css(insideCss);
}
