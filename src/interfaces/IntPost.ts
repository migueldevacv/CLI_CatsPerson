import { IntCatsData } from "@/interfaces/IntCatsResponse";
import { IntPersonData } from "@/interfaces/IntPersonResponse";

export interface IntPost {
    profile:        IntPersonData;
    post:           IntCatsData;
}