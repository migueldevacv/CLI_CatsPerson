import Card from "@/modules/card";
import { IntPost } from "@/interfaces/IntPost";
import React, { useEffect, useState } from "react";
import CardSkeleton from "@/modules/cardSkeleton ";
import { PostService } from "@/services/PostService";
import { useInfiniteQuery, } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Main() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState<IntPost[]>([])
    const postQuery = useInfiniteQuery({
        queryKey: ['cat'],
        refetchOnWindowFocus: false,
        queryFn: PostService.getData,
        initialPageParam: 30,
        getNextPageParam: (lastPage: IntPost[], allPages: IntPost[][]) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    })

    const fetchNextPage = async () => await postQuery.fetchNextPage()

    useEffect(() => {
        const queryData = postQuery.data
        if (queryData) {
            setPosts(queryData.pages
                .reduce((a, b) => [...a, ...b], []))
            setLoading(false)
        }
    }, [postQuery.data, postQuery.hasNextPage]);


    return (
        <section className="grid justify-items-center">
            <div className="min-h-[100vh] flex flex-col w-[60%] bg-[#85d5fd20] shadow-inner justify-center py-5">
                {loading && <LoaderSkeleton />}
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => fetchNextPage()}
                    hasMore={true}
                    loader={<CardSkeleton />}
                    initialScrollY={0}
                    className="flex flex-col gap-5"
                >
                    {!loading && posts.map((reg, i) => (
                        <React.Fragment key={i}>
                            <Card post={reg} />
                        </React.Fragment>
                    ))}
                </InfiniteScroll>
                {(!postQuery.hasNextPage && postQuery.data) && (
                    <div className="p-5 text-md font-bold text-center">
                        {"Couldn't found more posts"}
                    </div>
                )}
            </div>
        </section>
    )
}

export function LoaderSkeleton() {
    return (<>
        {Array(10).fill({}).map((reg, i) => (
            <React.Fragment key={i}>
                <CardSkeleton />
            </React.Fragment>
        ))}
    </>)
}