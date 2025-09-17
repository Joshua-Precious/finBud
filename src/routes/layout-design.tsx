import { SearchInput } from "../components/ui";
import { Calendar, House, MessageCircleMore, BellDot, Menu, IdCard, ChartNoAxesCombined, Album, Users, Settings, LogOut } from 'lucide-react';
import List from "../components/blocks/list";
import UpdatesList from "../components/blocks/updates-list";

export default function LayoutDesign() {
    return (
        <div className="flex flex-col space-y-6 p-6">
            <header>
                <div className="py-6 flex items-center container mx-auto">
                    <div className='icon-container mr-2 items-center pl-1'>
                        <House size={48}/>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col space-y-1">
                            <h1 className="text-3xl">Hello Mr Jay</h1>
                            <h1 className="text-sm ">Explore information and activity about your properties</h1>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div  className="w-64 bg-base-100 rounded-2xl" >
                        <SearchInput placeholder="Search..."/>
                    </div>
                    <MessageCircleMore size={24}/>
                    <BellDot size={24}/>
                    
                    </div>
                </div>
            </header>

            <div className="flex container mx-auto min-h-auto">
                <div className="flex flex-1 space-x-8">
                    <div className="flex flex-col bg-base-100 p-3 justify-between space-y-30 rounded-4xl">
                        <div className="space-y-4">
                            <Menu /> 
                            <IdCard />
                            <ChartNoAxesCombined />
                            <Album />
                            <Calendar />
                            <Users />
                        </div>

                        <div className="space-y-4"></div>
                        
                        <div className="space-y-4">
                            <Settings />
                            <LogOut />
                        </div>
                        

                    </div>
                
                    <div className="flex flex-col flex-1 space-y-2">
                        <List />
                        <UpdatesList />
                    </div>
                
                </div>
            </div>
        </div>
    )
}