// function clicked() {
//     const name = document.getElementById('a').value;
//     const comment = document.getElementById('b').value;

//     if (isEmpty(name) && isEmpty(comment)) {
//         alert("Please fill in all required fields.");
//         return false; // Prevent form submission
//     }else if(isEmpty(name)){
//         alert("Please enter you name");
//         return false;
//     }else if(isEmpty(comment)){
//         alert("Please enter you comment");
//         return false;
//     }

//     if(!name){
//         alert("Name is required");
//         document.getElementById('a').focus();
//     }

//     const gender = document.querySelector('input[name="gender"]:checked')

//     if(!gender){
//         alert("Select the gender");
//     }
    
//     console.log("Name:", name);
//     console.log("Comment:", comment);
//     return true;
// }

// function isEmpty(str) {
//     return !str || !str.trim().length;
// }


// 

function clicked() {
    const nameInput = document.getElementById('a');
    const commentInput = document.getElementById('b');
    const gender = document.querySelector('input[name="gender"]:checked');

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    // Clear old errors
    document.getElementById('error-name').innerText = '';
    document.getElementById('error-comment').innerText = '';
    document.getElementById('error-gender').innerText = '';

    let valid = true;

    if (!name) {
        document.getElementById('error-name').innerText = 'Please enter your name.';
        nameInput.focus();
        valid = false;
    }

    if (!comment) {
        if (valid) commentInput.focus(); // Only focus if name is filled
        document.getElementById('error-comment').innerText = 'Please enter your comment.';
        valid = false;
    }

    if (!gender) {
        document.getElementById('error-gender').innerText = 'Please select your gender.';
        valid = false;
    }

    if (!valid) return false;

    console.log("Name:", name);
    console.log("Comment:", comment);
    console.log("Gender:", gender.value);
    return true;
}
