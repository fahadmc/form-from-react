
import pimg1 from "../../asset1/chicken-pepperoni.6952ef03215b72477abff3574b4b881e.1.jpg"
import pimg2 from "../../asset1/chicken-supreme-cheese-maxx.f3189985a62ddcc970ce5e43627177d2.1.jpg"
import pimg3 from "../../asset1/country-feast-cheese-maxx.01396975bebd766302f117884bbb9304.1.jpg"
import pimg4 from "../../asset1/malai-chicken-tikka.8549caa7a6c711026bfe753fa1bc5525.1.jpg"
import pimg5 from "../../asset1/momo-mia-non-veg.379d4c86ba9551f194bfc68ad9d77bc5.1.jpg"
import pimg6 from "../../asset1/veggie-supreme-cheese-maxx.9c36faf3796239a077a0a98ba489d7ce.1.jpg"


const Settings = () => {
  return (
    <div className="pmain">  
<img className="pmg1" src={pimg1} /><h3 className="ph1">Chicken Pepperoni</h3><button className="pb1">₹ 300.50/-</button>
<img className="pmg2" src={pimg2} /><h3 className="ph2">Chicken Supreme</h3><button className="pb2">₹ 457.80/-</button>
<img  className="pmg3"src={pimg3} /><h3 className="ph3">Country Feast</h3><button className="pb3">₹ 356.20/-</button>
<img className="pmg4" src={pimg4} /><h3 className="ph4">Malai-chicken-tikka</h3> <button className="pb4">₹ 239.99/-</button>
<img className="pmg5" src={pimg5} /><h3 className="ph5">Momo-mia-non-veg</h3><button className="pb5">₹ 299.90/-</button>
<img className="pmg6" src={pimg6} /><h3 className="ph6">veggie-supreme-cheese-maxx</h3> <button className="pb6">₹ 320.00/-</button>

    </div>
  )
}

export default Settings