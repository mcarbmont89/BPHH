const API_URL = 'https://botic-cms.vercel.app/api/careers'

export const fetchCareers = async () => {
    const res = await fetch(API_URL)
    const careers = await res.json()

    return careers
}

export const fetchCareerById = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`)
    const career = await res.json()

    console.log(career)

    return career
}
