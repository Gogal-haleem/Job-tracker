import Link from "next/link"

import { Briefcase} from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Navbar(){
    
    return<>
       <div className="flex px-6 py-6 border-b-[2px] border-gray-400 justify-between font-semibold">

        <div>
         <Link href="/" className="flex flex-row gap-2 text-destructive"> Job Tracker <Briefcase/> </Link>
         </div>

        <div className="-mt-1 flex gap-6">
            <Link href="/sign-in"> 
            <Button variant="ghost" className="hover:cursor-pointer">Log In</Button>
            </Link>
           
           <Link href="/sign-up"> 
            <Button className="hover:cursor-pointer  bg-destructive">Start for free</Button>
            </Link>

        </div>

       </div>
    </>
}