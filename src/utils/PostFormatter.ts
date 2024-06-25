import { IntCatsData } from "@/interfaces/IntCatsResponse";
import { IntPersonData } from "@/interfaces/IntPersonResponse";
import { IntPost } from "@/interfaces/IntPost";

export class PostFormatter {
    public static async createPosts(catResponse: IntCatsData[], personResponse: IntPersonData[]) {
        const newList: IntPost[] = []

        for (let i = 0; i < catResponse.length; i++) {
            newList.push({
                post: catResponse[i],
                profile: personResponse[i],
            })
        }
        return newList
    }
}