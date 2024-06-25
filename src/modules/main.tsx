import { IntCatsData } from "@/interfaces/IntCatsResponse";
import { IntPersonData } from "@/interfaces/IntPersonResponse";
import { IntPost } from "@/interfaces/IntPost";
import Card from "@/modules/card";
import CardSkeleton from "@/modules/cardSkeleton ";
import { CatService } from "@/services/CatService";
import { PersonService } from "@/services/PersonService";
import { PostFormatter } from "@/utils/PostFormatter";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Main() {
    const triggerRef = useRef()
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState<IntPost[]>([])
    const personQuery = useInfiniteQuery({
        queryKey: ['people'],
        queryFn: PersonService.getPeople,
        initialPageParam: 1,

        getNextPageParam: (lastPage: IntPersonData[], allPages: IntPersonData[][]) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    })

    const catQuery = useInfiniteQuery({
        queryKey: ['cat'],
        queryFn: CatService.getCats,
        initialPageParam: 1,
        getNextPageParam: (lastPage: IntCatsData[], allPages: IntCatsData[][]) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    })

    const hasMore = catQuery.hasNextPage ||
        personQuery.hasNextPage ||
        catQuery.isLoading ||
        personQuery.isLoading

    const fetchNextPage = async () => {
        const newCatQuery = await catQuery.fetchNextPage()
        const newPersonQuery = await personQuery.fetchNextPage()
        return newCatQuery.fetchStatus && newPersonQuery.fetchStatus
    }

    useEffect(() => {
        if (catQuery.data && personQuery.data) {
            // console.log(catQuery.data.pages
            //     , personQuery.data.pages);
            const newPosts = PostFormatter.createPosts(catQuery.data.pages, personQuery.data.pages)
            setPosts(newPosts)
            setLoading(false)
        }
    }, [catQuery.data, personQuery.data])

    if (personQuery.isError || catQuery.isError) return <div>Has been an error...</div>



    return (
        <section className="grid justify-items-center">
            <div className="flex flex-col w-[60%] bg-[#85d5fd20] shadow-inner justify-center py-5">
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => fetchNextPage()}
                    hasMore={hasMore}
                    loader={<LoaderSkeleton />}
                    initialScrollY={0}
                    className="flex flex-col gap-5"
                >
                    {!loading && posts.map((reg, i) => (
                        <React.Fragment key={i}>
                            <Card post={reg} />
                        </React.Fragment>
                    ))}
                </InfiniteScroll>
            </div>
        </section>
    )
}

export function LoaderSkeleton() {
    return (<>
        {Array(10).fill({}).map((reg, i) => (
            <React.Fragment key={i}>
                <CardSkeleton post={reg} />
            </React.Fragment>
        ))}
    </>)
}