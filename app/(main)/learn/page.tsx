
import { StickyWrapper } from "@/components/StickWrapper"
import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "./header"


const LearnPage = () => {

    return (
        <div className='flex px-6'>
            <StickyWrapper >
                hii
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Hindi" />
            </FeedWrapper>
        </div>
    )
}


export default LearnPage