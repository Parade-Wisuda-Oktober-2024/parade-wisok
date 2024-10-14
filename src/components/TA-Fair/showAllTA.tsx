'use client'
import { useRouter } from "next/navigation"

interface WisudawanProfile {
    name: string | null;
    faculty: string | null;
  }

interface Wisudawan {
    id: string;
    profile: WisudawanProfile | null;
  }
interface TA {
    id: string;
    title: string;
    description: string;
    wisudawan: Wisudawan | null;
    likesCount: number;
  }


export default function ListTA({allTA, currentPage}:{
    allTA?:TA[],
    currentPage: number
}){
    const totalPage: number = allTA?.length ?? 0
    const router = useRouter()
    const nextPage =  ()=>{
        if (currentPage+1 > totalPage){
            router.push(`?page=${currentPage}`)
        } else {
            router.push(`?page=${currentPage + 1}`)
        }
    }
    const prevPage = () => {
        if (currentPage - 1 < 0){
            router.push(`?page=${currentPage}`)
        } else {
            router.push(`?page=${currentPage - 1}`)
        }
    }
    return (
        <>
           <main>
                <div className="text-center my-5">
                    <h2>List TA</h2>
                    <ul>
                        {
                            allTA?.map((TA)=>(
                                <li key={TA.id} className="my-3">
                                    <h4>{TA.title}</h4>
                                    <p>{TA.wisudawan?.profile?.name ?? "Tidak ada data"}</p>
                                    <p>{TA.wisudawan?.profile?.faculty ?? "Tidak ada data"}</p>
                                    <p>{TA.description}</p>
                                    <p>Likes: {TA.likesCount}</p>
                                </li>
                            ))
                        }
                    
                    </ul>
                </div>
                <div className="text-center my-5">
                    <button className="mx-3" onClick={prevPage} disabled={currentPage <= 1}>Prev</button>
                    <span>Page {currentPage}</span>
                    <button className="mx-3" onClick={nextPage} disabled={currentPage >= totalPage}>Next</button>
                </div>
            </main> 
        </>
    )
}