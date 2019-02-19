import { carouselUrl } from '_consts/dummy';

export var imageFetcher = async (number) => {
    let images=[];
    for (let i = 1; i < number+1; i++) {
        await fetch(carouselUrl, { method: "get" })
                .then(resp => images.push({id: i, url: resp.url}))
                .catch(err => console.log("UNABLE TO FETCH IMAGES"))
    }
    return images;
}