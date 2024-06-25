import { env } from "@/enviroment/env";
import { IntCatsResponse } from "@/interfaces/IntCatsResponse";
import { IntRequestParams } from "@/interfaces/IntRequestParams";

export class CatService {
    public static getCats({ pageParam = 1 }: IntRequestParams) {
        return fetch(`${env.catsApi}${pageParam}`)
            .then(res => res.json())
            .then((res: IntCatsResponse) => res.data)
    }
}