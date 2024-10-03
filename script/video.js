//create loadCategories 
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
};

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));

};




const displayVideos = (videos) =>{
    //console.log(videos);
    const videoContainer = document.getElementById('videos')

    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList = 'card card-compact'
        card.innerHTML=`
        <figure class="h-[200px]">
            <img class="w-full h-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="py-2 flex gap-3">
            <div>
            <img src= ${video.authors[0].profile_picture} class="w-10 h-10 rounded-full object-cover">
            </div>
            <div>
                <h2 class=" font-bold">${video.title}</h2>
                <div class="py-2 flex gap-3 text-center">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">
                
            </div>
        </div>
        
        `;
        videoContainer.append(card)
    })
}


//create displayCategories 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')

    categories.forEach(item => {
        //console.log(item);

        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        categoryContainer.append(button)
    });
};
loadCategories()
loadVideos()


