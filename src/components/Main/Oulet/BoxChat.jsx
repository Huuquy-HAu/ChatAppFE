import React from 'react'

function BoxChat() {
    const dataBox = [
        {name:"test",
        avtar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIGBpSqN8Z68NA-PZJjIYQNIAzJosw4YWig&usqp=CAU",
        mess : "asdasdasdasdasdasasda"
    },
    {name:"test",
    avtar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIGBpSqN8Z68NA-PZJjIYQNIAzJosw4YWig&usqp=CAU",
    mess : "asdasdasdasdasdasasdaasdasdasdasdasdasdasdasdaweqdasdasasdasdasdasdasdasd123"
},
{name:"test",
avtar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIGBpSqN8Z68NA-PZJjIYQNIAzJosw4YWig&usqp=CAU",
mess : "asdasdasdasdasdasasda"
},
{name:"test",
avtar:"https://www.invert.vn/media/ar/21_772.jpeg",
mess : "asdasdasdasdasdasasda"
},
    ]
  return (
    <div className='boxChat'>
            <div className="boxChat-top">
                <h1>Chat</h1>
               <div><button><i class="fa-solid fa-circle-plus"></i></button></div>
            </div>
            <div className="boxChat-mid">
                    <div className="boxChat-mid-conten">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="" id="" placeholder='Tìm Kiếm'/>
                    </div>
                
            </div>
            <div className="boxChat-bot">
                {
                    dataBox.map(function(value,index){
                        return(
                            <div className='boxChat-bot-item' key={index}>
                               <div className='boxChat-bot-item-img'> <img src={value.avtar} alt="" /></div>
                                <div className='boxChat-bot-item-conten'>
                                    <h3>{value.name}</h3>
                                    <p>{value.mess}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default BoxChat