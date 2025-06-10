function clicked() {
    const name = document.getElementById('a').value;
    const comment = document.getElementById('b').value;

    if (isEmpty(name) && isEmpty(comment)) {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }else if(isEmpty(name)){
        alert("Please enter you name");
        return false;
    }else if(isEmpty(comment)){
        alert("Please enter you comment");
        return false;
    }

    const gender = document.querySelector('input[name="gender"]:checked')

    if(!gender){
        alert("Select the gender");
    }
    // Optional: Log valid inputs
    console.log("Name:", name);
    console.log("Comment:", comment);
    return true; // Allow form submission
}

function isEmpty(str) {
    return !str || !str.trim().length;
}
