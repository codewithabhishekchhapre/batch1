function Profile(props){
     return(
          <>
          <div className="w-[450px] overflow-hidden p-3 h-64 rounded-2xl flex bg-gray-200">
               <div className="w-[40%] rounded-lg overflow-hidden h-full  bg-red-100">
                    <img src="https://i.pinimg.com/474x/a1/18/2f/a1182f1dcb1e9afda517026981fa826e.jpg" className="h-full w-full object-cover" alt="" />
               </div>
               <div className="w-[60%] h-full px-5 py-3 ">
                    <h1 className="font-semibold text-2xl">{props.data.name}</h1>
                    <p className="text-xs font-medium text-gray-500">{props.data.position}</p>

                    <div className="w-full mt-5 flex h-16 rounded bg-gray-600">
                         <div className="bg-gray-300 w-full h-full text-center pt-1.5">
                              <h4 className="text-sm font-medium text-gray-400">Articles</h4>
                              <h2 className="font-bold text-2xl text-gray-600">{props.data.articles}</h2>
                         </div>
                         <div className="bg-gray-400 w-full h-full text-center pt-1.5">
                              <h4 className="text-sm font-medium text-gray-300">Followers</h4>
                              <h2 className="font-bold text-2xl text-gray-300">{props.data.followers}</h2>
                         </div>
                         <div className="bg-gray-500 w-full h-full text-center pt-1.5">
                              <h4 className="text-sm font-medium text-gray-200">Rating</h4>
                              <h2 className="font-bold text-2xl text-gray-100">{props.data.rating}</h2>
                         </div>
                    </div>

                    <div className="w-full flex justify-between mt-9">
                         <button className="px-7 py-1.5 bg-gray-900 text-sky-50 border rounded">Chat</button>
                         <button className="px-7 py-1 border rounded">Follow</button>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Profile;