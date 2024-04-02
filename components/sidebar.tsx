import { cn } from "@/lib/utils"
import Image from "next/image"
import { SidebarItem } from "./sidebar-item"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
type Props = {
    className?: string
}
export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            'h-full   lg:fixed lg:w-[256px] flex  flex-col top-0 left-0 border-r-2 px-4',
            className
        )}
        >
            <div className="pt-8 pl-4 flex items-center pb-7 gap-x-3">
                <Image src='/mascot.svg' width={30} height={30} alt="log" />
                <h1 className="text-2xl font-bold text-blue-500  font-mono tracking-tighter">Lear
                    <span className="text-black font-mono font-semibold tracking-wide">ner</span></h1>

            </div>
            <div className='flex flex-col gap-y-4 rounded-md w-full flex-1'>
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem
                    label="Leaderboard"
                    href="/leaderboard"
                    iconSrc="/leaderboard.svg"

                />
                <SidebarItem
                    label="Quests"
                    href="/quests"
                    iconSrc="/quests.svg"
                />
                <SidebarItem
                    label="Shop"
                    href="/shop"
                    iconSrc="/shop.svg"
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}