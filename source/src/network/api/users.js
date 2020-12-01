const getUsers = async() => {
    const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
    const json = await response.json()
    return json
}

export default getUsers;