import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter( cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })

            }
        })
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl -p-3">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full p-3">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-3">
                            <button className="btn bg-green-500">View</button>
                            <Link to={`updateCoffee/${_id}`} ><button className="btn bg-orange-500">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;