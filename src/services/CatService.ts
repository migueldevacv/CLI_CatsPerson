import { env } from "@/enviroment/env";
import { IntCatsResponse } from "@/interfaces/IntCatsResponse";
import { IntRequestParams } from "@/interfaces/IntRequestParams";

export class CatService {
    public static async getCats({ pageParam = 1, ...e }: IntRequestParams) {
        // console.log(fetch(`${env.catsApi}${pageParam}`)
        //     .then(res => res.json())
        //     .then((res: IntCatsResponse) => res.data))
        return await fetch(`${env.catsApi}${pageParam}`)
            .then(res => res.json())
            .then((res: IntCatsResponse) => res.data)
    }
}