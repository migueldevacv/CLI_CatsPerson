import Card from "@/modules/card";
import { useQuery } from "@tanstack/react-query";

export default function Main() {
    const info  = useQuery({queryKey: ['todos' ], queryFn: ()=> {
      console.log(1);
    } })
    return (
        <section className="grid justify-items-center">
            <div className="flex flex-col w-[60%] bg-[#f0eded] shadow-inner justify-center py-5 gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}