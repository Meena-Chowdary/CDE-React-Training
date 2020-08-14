const Addfirstname = function (firstname) {
    // console.log(firstname)
    return (
        {
            type: "FIRSTNAME_ADD",
            payload: firstname
        }
    )
}

export default Addfirstname;