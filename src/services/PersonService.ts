import { env } from "@/enviroment/env"
import { IntPersonResponse } from "@/interfaces/IntPersonResponse"
import { IntRequestParams } from "@/interfaces/IntRequestParams"

export class PersonService {
    public static async getPeople({ pageParam = 1 }: IntRequestParams) {
        return await fetch(`${env.userApi}${pageParam}`)
            .then(res => res.json())
            .then((res: IntPersonResponse) => res.results)
    }
}