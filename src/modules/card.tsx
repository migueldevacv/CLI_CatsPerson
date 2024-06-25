import { IntPost } from "@/interfaces/IntPost";

export default function Card({ post }: { post: IntPost }) {
    return (
        <div className="mx-5 bg-white rounded-lg p-3 shadow-md">
            <div className="flex items-center p-1 gap-2">
                <img src={post.profile?.picture?.medium} className="w-[45px] h-[45px] rounded-full" alt="" />
                <p><span className="text-xl  font-bold">{Object.values(post.profile?.name || {}).join(' ')}</span></p>
            </div>
            <p>{post.post?.fact}</p>
        </div>
    )
}