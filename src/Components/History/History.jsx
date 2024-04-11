import React from 'react'
import { Myprovider } from '../AI_Context/AiContext'
import { SiProbot } from "react-icons/si";
import { BiImageAdd } from "react-icons/bi";
import { MdMicNone } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";


const History = () => {
    const { recentans,data, setData, sent, recent, setPrompt,allprompt,setAllprompt,mobile,setMobile} = Myprovider()
    console.log(recentans)

    const handlechange = (e) => {
        setData(e.target.value);
      };

      const handleClick = () => {
        if(data.length===0){
          alert("please Enter a propmt")
        }else{
          sent(data);
          setData("");
          setPrompt(true);
          setAllprompt([...allprompt,data])
        }
      
      };
      const handlekey=(e)=>{
        if(e.key==="Enter"){
         if(data.length===0){
           alert("please Enter a Prompt")
         }else{
           sent(data);
           setData("");
           setPrompt(true);
           setAllprompt([...allprompt,data])
         }
         
        }
     }
   
     const handlekeydown=(e)=>{
       if(e.key==="Delete"){
         setPrompt(false);
         setAllprompt([])
       }
     }
   
      window.addEventListener("keydown",handlekeydown)
      
    
  return (
    <>
         <div className="lg:w-screen sm:w-screen  w-screen  flex flex-col items-center  overflow-y-scroll scroll-smooth">

         <div className="lg:w-[50rem] sm:w-80 h-screen bg-white  flex flex-col justify-between ">
         <div className="lg:w-10/12 sm:w-96 h-10 bg-white flex justify-between items-center p-2">
         <div
              title="Collapse menu"
              className="w-10 h-10 lg:hidden sm:block flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-200"
            >
              <IoReorderThreeOutline
                className="text-2xl sm:block"
                onClick={() => setMobile(!mobile)}
              />
            </div>
            <h1 className="text-xl ms-2">Baymax Ai</h1>
            <div className="w-10 h-10   flex justify-center items-center rounded-full overflow-hidden ">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQDw8QDxAPEBAQDxAPDQ8NEBAPFREXFhURFRUYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGw8QGi0mHyU1Ly4tKy0tNS4tLS8tKy0vLS0tLS8tLS0vLS0uLS0tLS8tLS0tNy0tLS0rLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAEAQAAIBAwEEBwMJBwMFAAAAAAABAgMEESEFEjFBBhMiUWFxgTKRoRQzQlJicrHB0SMkkqKy4fFDgtIHNDWzw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAQEAAgIBAwEFCQAAAAAAAAABAhEDIRIEMUEiBRMjMrEUM1JhcaHB0eH/2gAMAwEAAhEDEQA/APhoAAAAAAAAAAAAAAAAOiwsqlepGnSjvSl6JLnJvkl3l/Tt6VusUaMbuqvarVVLqU+6nBY3l9p+4i2RaY2+zzAPTvacJ9i9s6e49OsoQdKpDxXeVu29ju33alOXXW1X5qsv6JLlJd3P8JRZpVAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtOjNrGrdUlP5uDdWp3dXTi5yz/Dj1A9FszZ6oUup4VakYzunzUZLehb+GmJS80i5tbaKWiR5CVpXrTdxvpVKsnVxvOLzJ5wn68D0Gw9pVt9Ubik02nu1Gt1PuzyfmjHOb7dGGWppazsITWJRWpQ1LaNpN29Z5srvsvm6NT6NSPc09Sw27eXMJKFvQm95Z61QcopZxhck/FlZLopcVKFSvVqx3lCUt1ydWcsLOHJaJ+WRh13aZ99SPKbSspW9WpRn7VOTi8cH3SXg1h+pzF/0lXWUrO54urR6qo++pSwsvx3ZR9xQGznAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuthPct76tzVCNCPnWmk/wCWMilLi8/Y2VGk9J3FSVzNcGqaW5ST8+2/cBaW0I1o00249mD08EuHjlG7a9VRdCnDRwaUUuL7WW36lLY3bjTUlq4Nr04m2h8orVFWjR3sNc8Rynni2Z9+3w169/l9Ivrbr7ZU37Ml2seTX5mdlZxt7aceMVGpOcnnMuzrn0R5yXSW8pRW/aQ3FxxJvTxabx7iz23teE9l1K8MpVYbiT4qUpbjj6a+4y1lJr4rbeNu/mPEQ/a7Lmudtcwl/sqJxf8AM4Hnj0XQ9qpKvaSaSu6MqcHLgqy7VN/xJe4obmhKlOVOpFxnCTjKL4qS4o6HLWsAEoAAAAAAAAAAAAAAAAAAAAAAAAAAALvbcflCV3T+koxrw506kYqOfuvCaKaC1LKzqOlJTjrylFvScecWRbpphx3KWxw0auFJcmvij2Ww9pQp08zajGEIrOM5b8FxeTz21bKMHCrS1o1k3D7L+lB+KZxuDSXFxb0fLy8yLN9IxyuPb6irqnVs69WMlKm6NXLw1wi8rD4M+fbR2i3aULVP2Z1K0/N6RX9T9ULRTlGUFOUaWkqnaap6c5Lg2btk2Hy25UI9mlCOZSemKa4t+ZWY+K9yuTV0c2W6k1VqN06NJqcp8OD03e95970NHSScqlxUrS/1Zby54XBRfksHpL+pGbUKS3KNPSnHGN7lvy8X8FoVu0KHY78Nfp+Zn979T0P2DXBcsvze/wDx5gGyrRlHimll4fJ4NZ0PKss6oAAgAAAAAAAAAAAAAAAAAAAAAEZODxkmk0nqWPVrGnBlcstN+Lh85e3AuCfcddN6LxRycG0bbaXL1XmVynTTgy1lp6Czhv7Or516m5i4+Clup/1MplR4pNpPiuTLzYetjf8AhKk/jErJx1845XmSxvvUq27OHJtcccFku+icNy0v5/SbhSz9ltJr3SZWx1ivHBc7EX7jeeNzBf8ArK29Vrwz8XCfzn6uaKNdwsrHjl+n98GyL4+ZorSfxw2+S/y0c2Hvt73qL+H4/wAXX+/7NN1RjODhz5PufJnnrm3lTluyXk+TXej00Fh6at8it6SKVOapTpuM4pSbksPDWmPD9DXiyu9OH7Q4cPDzvV/VSgA6XigAAAAAAAAAAAAAAAAAAAlI7bSjhp4TaedVlEW6TJt1bI2Q6j3prs8l3nRtCx6jtR9jmvq/2PT2dWl1KqZUV9JN43WuKPKbe2uquYU/Z5y7/Iz7yreX7vuKab1fmbKejz3a+hoOyzkuD5l8uorxfVm9HsFfuW0fuwfpx/IrUtKb8MP1RcdFqWbfaFLm7fK/gmvyRT09acfB/mR8GU1lW+39mPh+Rd7C/wDG3Eu+5z/NApYc/JsvNmLd2Su+rXeP43/xK38ta8H77D+rhp8CvrVt6SUNZdrXktfa8zr2jV6ujOS4pYj5vTPxPLQuJRTSftLD78GXFhuWvS9d6iYZ44347/w+kdFLSnHFSTUpr2c67v2vM7el2yYXtHEcKtTy6cu/vg/B/jg8BsTb0qHZllx7z0tTpPHq24azekV4k+Fxriz5Zzd14KtSlCThNOMovEk9GmYHoZ/tcufblLWTfMp7616t98Xwf5G8y24ssNduYAFlAAAAAAAAAAAAAAAJSyBd9F9i/KpycsqEdHh4e8+Bne01bTnTk03Tlu579Mp48mi+6NZtv2EliTeXLHZk5LK18vwZ4vaLm61XrfnN+W/95PXHgZzutb9OMLq7c9MtRznGdG+9o5gDRnbsM4PBgSCXT0uxNqu13qjjvqdLccVpwfH8TKrs9UW6M60d6Dw+w3y/wV3+l/tn+LLjpB/3db7y/pRjd7kjf33lWjq4cHWjrp7EuLZcX1xClbW9nHLqW8s1ezure3XwfPWbPPbik1mah2o4ym89paFntSTdxVbW63LVccaLQr8+O1sMvGzOe8cW1Km9RlHGNM5z3anmj0V/7E/us86acc1NRX1PLlyZeWQZ06jjwMAaOfaytbxcz1F9siN7aKVBJVbaMpbqXzkOLT+1zXu8vDI+t9ErelZUKVSvJKpctbseLllcEu5LizHk+nuOji+uWV8jBedNNmK1va0IrEJtVafduT1wvJ5XoUZrLubYWaugAEoAAAAAAAAAAANlD2o+afu1NZutKkYzjKaco57STw3FrDx46gj0XTC9nGvR3JOO5RhNY+s3LX3YR5mpNyblJtuTbberbfFnTtO+lcVN+WmEoxXdBcEchXGai2V3QAFlQzhHPvMDZEirYztd2FnKvTrKOE6NJzeXo085+CZ3bRr0q1adVTlHrHlJwb0SS/Ix2JJQsL+r9aKor1Sj/wDQr4S7NN+OH5Nf4KZY+1aeXdkdcqVLRupLEZRl82+TTx8C7u7SnWoxvac5PrqrjKLjhRwmtOfGJQVVpjxfuSLzozPrNl1oc6FdSXk3H/lIp49W7a8Nl5McbOrVNtmlii2nzW991vGPe0eaPY3tLfpzgvpR08+K/A8e1jR6NaNPTDJ4ctxr9o8M4854zrSAAbPPC42Re1at1bKpUlPdcKUN553YZ9lFObbWvKlOFSGkoSUo+aeSLNxbG6r3f/V2lFVLSWO06U4t83GLTS98pe8+fl30q6Qy2hUpTlHc6ulGDSejnluUl3cUvRFIRhLMdVPJZcrYAAsoAAAAAAAAAAAAAAAAAADKmsszkmvA1HfZ1I8Ksd+HhpJeTIq2NXVddXsimsfPXGX5Lfa/oRXU/ml4OD/AsekG0rera29C3cn1c8tOEo7qUcLV8XqV9COYKL4Si4+T5EUxdVTh6P45/Qtf+nz3431H69LKX2sSX6FTJ9n0X4M6+g206VpXnOq2oyg1lRctVLKWF6kRberLHVlac88Fxy3yRR9K7Tqq0E1u1JUozqw5xk28b3c3HdePE9Nd9JaNNtbPt+qk8/vFXt1Ip8qcW2oLx+B4a/m5VZycnJyk3KUm5NyfFtvjqV4+Px93Z631c5tTGdRzgA1eeAAAAAAAAAAAAAAAAAAAAAAAAAACTbbyecGk67Sn9J8AmOhU+Zg7vd7PHDz/AG+JsvPm96Da118isI903pYvaWdN3icsHiSXeaDOl7Sx3jSN7XNKJS1F2n5v8S7aW40m99ppPPBlG0ImoGCQSqjAwSAIIMjEAAAAAAAAAAAABKAAkAQCSABBIAmCy0jtb5I46Sy1jvL+VvBpSTWeeOfoVq2LiuY4o49X7yrLfaE+zhev6FS0TDJiZU5Yafc8kYBKqxc86nNdx7Wfra+vMytKcpcOHuLHa9GPVRaccrCwnhvk9CvtV73FKASWUQCQBAZIAwBk0YgAAAAAAAADIhEgACQIBIAgEgCYRyztoWuFvN6HHT0Z3Tr5SRFWhcSysI4ZROvJpqIQrQZRjkndNlOJKGVGhnRnRWtlCm/F6EwRheVXLTuKrfDhwQZtEYLKMQTgAQME4JAxwYtGwhoDWAAAAAEogzAgkEgQMEpGSiBjgYNm6RukJ0wBlgnBIhI2wRjGJ00qeSBgkOrOvqCVTCY4+qM4UzrVI30rbJC2nHuGirAuZWuDiuKeBtPirJRMGjoqRNbRKumrAwbN0lQCNNWBg27pi4g0wwDLBGCUNc4mBvNU44CGIAAyiZGMTIAAAJJUjEkDLffeN5mIAyyMmIAzUmZRrSXB49xrAHR8rqfWfuRHymf1n8DQSBvV1P6z+BnG/qrhUfuX6HKMhO663f1XxqP4foYSuJvjJs0ZGQbrZvsZMMk5BtmmSmYZGQhsyToa8k5Azwu5E7q7l7jDJOQNm7HuXuNV1Fbrwly5eJlvGq6l2fUDkAAGUTIAAAAAAAkAAAAARIAAAAAABIAAkAASSAARIAEkgASarngvMADmAAH/2Q=="
                className="w-screen"
              />
            </div>
          </div>
           
          <div className="lg:w-[50rem] sm:w-96  flex items-center gap-2 p-3 ">
        <div className="w-10 h-10   flex justify-center items-center rounded-full overflow-hidden ">
          <img
            src="data:image/jpeg;base64,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"
            className="w-screen"
          />
        </div>

        <div>
          <h1>{recent}</h1>
        </div>
      </div>
      
      <div className="lg:w-10/12 sm:w-[25rem]  h-96 flex  gap-2 p-3 overflow-auto">
           <div className="w-7  flex justify-center">
            <SiProbot
            className="text-3xl my-5"
            style={{color:"#698fb7"}}
            />
           </div>
           <div>
            <p className=" text-md text-wrap font-serif my-7">{recentans}</p> 
           </div>
      </div>

      <div className="w-12/12  bg-white flex  items-center relative"
          >
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="w-full  flex-1 outline-none h-16 ps-3 rounded-full"
              style={{ background: "#F0F4F9" }}
              value={data}
              onChange={handlechange}
              onKeyDown={handlekey}
            />

            <div className="flex text-2xl gap-2 items-center absolute right-2">
              <BiImageAdd />
              <MdMicNone />
            {data.length===0 ? null :  <LuSendHorizonal 
            onClick={handleClick} /> }
            </div>
          </div>
          <h1 className="text-center">The Answer Provided by this Ai tool could be wrong that'why don't take it seriously</h1>
         </div>

         </div>
    </>
  )
}

export default History
