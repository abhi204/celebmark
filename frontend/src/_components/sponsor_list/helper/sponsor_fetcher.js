import { sponsorUrl } from "_consts/dummy";

const sponsorFetcher = async () => {
    let sponsors = [];
    // api should give a list of objects (each obj defining a sponser detail -> url, name, web page, id)
    // loop below mimics this functionality for 5 objects
    for (let id = 0; id < 5; id+=1) {
        await fetch(sponsorUrl)
                .then(resp => sponsors.push({name: "SponsorName", id, url: resp.url }))
                .catch(err => console.log("Unable to fetch list of sponsors"));        
    }
    return sponsors;
} 

export default sponsorFetcher;