
const Part = ({name,exercises}) => {
    //console.log('Parts',props);
    return (
    <div>
        <h2>{name}</h2>
        <p>Exercises {exercises}</p>
    </div>
    )
}
const Content = (props) => {
    console.log("Content",props);

    return (
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
            
        </div>
    )
}

export default Content;