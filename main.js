async function getDataFunc () {
    try{
        return await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(response=>
            response.json() 
            )
        
    }
    catch(err){}
    finally{}

}


function printFunc () {
    getDataFunc ()
    .then((resulte)=>{
        resulte.data.forEach(item => {

            h1_id.innerHTML+=`<li>${item.movieName}:<img src='${item.image}'/><a href='${item.linkToMovie}'></a><li/>`
        });

    })
    .catch(()=>{})
    .finally(()=>{})
}


async function saveMovieFunc (eve) {
    eve.preventDefault();
    const myNewMovie =  {
        movie: {
            image:img_id.value,
            linkToMovie:link_id.value,
            movieName:movie_name_id.value,
            rating:rating_id.value,
            synopsis:synop_id.value
        }
    }
    try {
        
        await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
        {
            method:"POST",
            body:JSON.stringify(myNewMovie),
            headers:{
                'Content-Type':'application/json'
            },
        }
        )
    } 
    catch (err) {
        
    }
    finally{

    }
    
}
