import { IntRequestParams } from "@/interfaces/IntRequestParams"
import { PersonService } from "./PersonService"
import { CatService } from "./CatService"
import { PostFormatter } from "@/utils/PostFormatter"

export class PostService {

    public static async getData(e: IntRequestParams) {
        const newCatQuery = await PersonService.getPeople(e)
        const newPersonQuery = await CatService.getCats(e)

        return PostFormatter.createPosts(newPersonQuery, newCatQuery)
    }
}