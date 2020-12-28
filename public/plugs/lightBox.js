

$.fn.lightBox = function(){


  createLightBox();
  //showLightBox("http://monkeys.co.il/wp-content/uploads/2015/04/b2f09af56404a9b1adfdbdd850ef0dbe_large2-300x187.jpeg","text text text text");

  $(".light_box button").on("click",function(){
    closeLightBox();
  })
  // רק תמונות שיש להם אטריביוט דאטא לייט יגיבו ללחיצה
  // עליהם בפלאג אין
  $("#data-light").on("click",function(){
    console.log("aaaa")
    let imgSrc = $(this).attr("data-src");
    let imgAlt = $(this).attr("data-alt");
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
    <img class="light_img" src="" class="float-left mr-2 w-50">
    <p class="light_txt">test</p>
    <button>Close</button>
  </div>
</div>
  `)


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
  // ואז לתת לאלמנט את האובייקט עם כל המאפיינים
  $(".light_box").css(lightCss);

  let insideCss = {
    maxWidth: "600px",
    width: "100%",
    background: "white",
    border: "2px solid grey",
    minHeight: "300px",
    padding:"8px",
    textAlign:"center"
    // height:"300px"
  }

  $(".light_inside").css(insideCss);
}


// $(() => {
//   $(document).lightBox()

// })