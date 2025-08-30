import { Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar(){
    return(
        <div className="w-full h-14 border-b shadow-sm flex items-center justify-end gap-2 px-4">
            <div className="flext items-center gap-4">
                <Settings className="h-5 w-5"/>
            </div>
            <Avatar>
                <AvatarImage src="Avatar2.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
};