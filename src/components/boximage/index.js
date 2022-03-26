import './styles.css';

const BoxImage = (props) => {
    return (
        <div 
            className="box-image" 
            style={{background: props.background.slice(0,1) == '#' ? `${props.background}` : `url(${props.background})`}}
            onClick={props.selectedItem}
         >
        </div>
    )
};
export default BoxImage;