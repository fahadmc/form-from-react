import bgc from"../../assets/background_in_space.webp/"
import search from"../../assets/download.svg/"
import mainimg from"../../assets/lynx_in_space.webp/"
import'./Body.css'
function Body(){
    return(
        <div className='Body'>

    <img src={bgc} alt="Task1/src/assets/background_in_space.webp" />
<div  className="bdiv2">
 <h1 className="h1">Learn to Code</h1>
    <h2 className="h2">With the worlds largest web developer site.</h2>
    <div className="div10">
    <input className="search1" type="text" placeholder="Search our tutorials, e.g.HTML" /><button className="btn10"><img className="sr1" src={search} alt="Task1/src/assets/download.svg" /></button>
    </div>
    
<p >Not Sure Where To Begin? <a href="http://https://www.w3schools.com/where_to_start.asp"></a></p> </div>

<div className="divimg">
    <img src={mainimg} alt="Task1/src/assets/lynx_in_space.webp" />
</div>
       
        </div>

    )
}
export default Body
