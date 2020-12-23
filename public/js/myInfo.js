$(() => {
   // schema();
    init();
})

// const schema = () => {
//     var options = {
//         animationEnabled: true,
//         data: [{
//             type: "doughnut",
//             // innerRadius: "40%",
//             // showInLegend: true,
//             // legendText: "{label}",
//             // indexLabel: "{label}: #percent%",
//             // dataPoints: [
//             //     { label: "Department Stores", y: 6492917 },
//             //     { label: "Discount Stores", y: 7380554 },
//             //     { label: "Stores for Men / Women", y: 1610846 },
//             //     { label: "Teenage Specialty Stores", y: 950875 },
//             //     { label: "All other outlets", y: 900000 }
//             // ]
//                        dataPoints: [
//                 {  y: 6492917 },
//                 {  y: 7380554 },
//                 {  y: 1610846 },
//                 {  y: 950875 },
//                 {  y: 900000 }
//             ]
//         }]
//     };
//     $("#chartContainer").CanvasJSChart(options);

// }

const init = () => {
    $("#id_start").on("click", () => {
        window.location.href = "login.html";
    });
}