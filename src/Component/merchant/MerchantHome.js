import { useSelector } from "react-redux"
import { useLocalStorage } from "../../app/useLocalStorage"
import { selectUser } from "../../features/api/Api"

export default function MerchantHome() {
    const [user, setUser] = useLocalStorage("user", "{}")
    return (
        <div>
            <p>Merchant Home</p>
            <p>Welcome Merchant {user.fullName}</p>
            <div className="action-button-container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Add Menu
                </button>
            </div>
            <div className="table-container">
                <table>
                </table>
            </div>
            
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}