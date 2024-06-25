import { IntPost } from "@/interfaces/IntPost";

export default function CardSkeleton() {
    return (
        <div className="mx-5 animate-pulse bg-white rounded-lg p-3 shadow-md">
            <div className="flex items-center p-1 gap-2">
                <div className="w-[45px] h-[45px] bg-[#85d5fd2f] rounded-full" />
                <div className="h-7 w-[50%] rounded-full  bg-[#85d5fd2f]"></div>
            </div>
            <div className="h-2 bg-[#85d5fd2f] rounded-full mt-2"></div>
        </div>
    )
}