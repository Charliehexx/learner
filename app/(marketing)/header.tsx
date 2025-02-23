import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Loader } from "lucide-react"
import Image from "next/image"

export const Header = () => {
    return (
        <header className='h-20 w-full border-b-2 border-slate-100 px-4'>
            <div className='lg:max-w-screen-lg mx-auto  items-center justify-between flex  h-full'>
                <div className="pt-8 pl-4 flex items-center pb-7 gap-x-3">
                    <Image src='/mascot.svg' width={30} height={30} alt="log" />
                    <h1 className="text-2xl font-bold text-blue-500  font-mono tracking-tighter">Lear
                        <span className="text-black font-mono font-semibold tracking-wide">ner</span></h1>

                </div>
                <ClerkLoading>
                    <Loader className='h-5 w-5 animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal"
                            afterSignInUrl="/learn"
                            afterSignUpUrl="/learn">
                            <Button size="lg" variant="custom" className='font-semibold text-black tracking-wide'>
                                Log In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header >
    )

}