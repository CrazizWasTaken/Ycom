import "./component.css";
function Comp(props){
    return(
        <div class="Bass">
            <img className="Image" src={props.Starma.img}/>
            <h1 className="Title">{props.Starma.title}</h1>
            <h4 classname="desc0">{props.Starma.desc0}</h4>
            <h4 classname="desc1">{props.Starma.desc1}</h4>
            <h4 classname="desc2">{props.Starma.desc2}</h4>
            <h4 classname="desc3">{props.Starma.desc3}</h4>
            <h1 classname="price">{props.Starma.price}</h1>
        </div>
    )
}
export default Comp;