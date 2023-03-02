// let data = [
//     {
//         title: "Aprendiendo JavaScript",
//         year: "2021",
//         isbn: "979-8700179263",
//         author: "Carlos Cardona"
//     },{
//         title: "React.js Práctico",
//         year: "2022",
//         isbn: "TBD-2254",
//         author: "Francisco Areiza"
//     },{
//         title: "Clean JavaScript",
//         year: "2020",
//         isbn: "979-8567583319",
//         author: "Miguel A. Gómez"
//     }
// ]

// data=[];

// function getData(){
 
//     return new Promise((resolve, reject)=>{
//         if (data.length === 0){
//             reject(new Error('Data is empty'));
//         }
//         setTimeout(()=>{
//             resolve(data);
//         }, 2000)

//     })

// }



// getData()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err.message))

// async function fetchingData(){
//     const books = await getData();
//     console.log(books)
// }


async function requestHandler(req, res){
    let user = await User.findById(req.userId);
    let tareas = await Tasks.findById(user.tasksId);



}