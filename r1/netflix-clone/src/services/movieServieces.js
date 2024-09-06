// const key = import.meta.env.VITE_TMBD_KEY;

const baseUrl = 'https://api.themoviedb.org/3';
const endPoints = {
    popular: `${baseUrl}/movie/popular?api_key=${"c1a997728ab308241ce9c34cb520e3bc"}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${"c1a997728ab308241ce9c34cb520e3bc"}`,
    trending: `${baseUrl}/movie/popular?api_key=${"c1a997728ab308241ce9c34cb520e3bc"}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${"c1a997728ab308241ce9c34cb520e3bc"}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${"c1a997728ab308241ce9c34cb520e3bc"}`,
};

export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endPoints;
