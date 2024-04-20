

export const Card = () => {

    return(

        
        <div className="cursor-pointer bg-[#1a191e] outline h-fit outline-red-600 w-52 p-3 rounded-2xl relative">

            
            <div className="relative min-h-64 coutline">
                {/* <!-- borders --> */}
                <img className="h-20 absolute top-0  block cabsolute " src="./../assets/border(3).svg" alt=""/>
                <img className="h-20 absolute right-0  [transform:scaleX(-1)] " src="./../assets/border(3).svg" alt=""/>
                <img className="h-20 absolute bottom-0 left-0 [transform:scaleY(-1)] " src="./../assets/border(3).svg" alt=""/>
                <img className="h-20 absolute bottom-0 right-0    [transform:scale(-1)] " src="./../assets/border(3).svg" alt=""/>
                {/* <!-- borders -->     */}
                
                <div className=" inset-0 m-auto coutline pb-12 outline-red-500 ch-[65%] h-fit   ">
                    <div className="w-full h-36  bg-[url('/assets/bg.png')] bg-cover bg-center oultine outline-white cbg-blue-500">
                    </div>
                    <p className="bg-white text-black px-4 text-center">Public</p>

                    <div className="description">

                        <p>Title</p>
                        {[1,2,3,4,5].map(()=>{
                            return(
                                <p>Features</p>
                            )
                        })}
                    </div>
                </div>
            </div>
    </div>
)
}