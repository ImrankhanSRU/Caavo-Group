import './Alert.css'

export default function Alert() {
    return(
        <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';"></span> 
            <strong>Success!</strong> Group Created Successfully.
        </div>
    )
}