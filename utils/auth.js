import {http} from '~/plugins/axios'


export default async function doAuth(data) {
    return await http.post(
        "token-auth/",
        {
            username: data.username,
            password: data.password
        }
    )
}
