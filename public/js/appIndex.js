$(() => {
    init();
})
  
const init = () => {
    $("#id_start").on("click",() => {
        console.log('sss');
        window.location.href = "login.html";
    
    });
}