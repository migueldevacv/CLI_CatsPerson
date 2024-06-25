import { IntCatsData } from "@/interfaces/IntCatsResponse";
import { IntPersonData } from "@/interfaces/IntPersonResponse";
import { IntPost } from "@/interfaces/IntPost";

export class PostFormatter {
    public static createPosts(catResponse: IntCatsData[][], personResponse: IntPersonData[][]) {
        const newList: IntPost[] = []
        const newCatArray = catResponse.reduce((a, b) => [...a, ...b], [])
        const newPersonArray = personResponse.reduce((a, b) => [...a, ...b], [])

        for (let i = 0; i < newCatArray.length; i++) {
            newList.push({
                post: newCatArray[i],
                profile: newPersonArray[i],
            })
        }
        return newList
    }
}