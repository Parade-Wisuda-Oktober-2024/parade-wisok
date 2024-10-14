import getAllTA from "../action/getAllTA";
import ListTA from "~/components/TA-Fair/showAllTA";
export default async function Page({
    searchParams,
}:{
    searchParams?:{
        page?:string;
    }
}){
    
    
    let currentPage = Number(searchParams?.page) || 1; 
    const AllTA = await getAllTA(currentPage)
    if (currentPage > AllTA.length || currentPage < 0){
        currentPage = 1
    }
   
    return <ListTA allTA={AllTA} currentPage={currentPage} />;
}