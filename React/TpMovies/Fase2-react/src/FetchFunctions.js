const ApiKey = import.meta.env.VITE_API_KEY

export const movieById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
    const data = await response.json()
    return data
}

export const castById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`)
    const data = await response.json()
    return data
}