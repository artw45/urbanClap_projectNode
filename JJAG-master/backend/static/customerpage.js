function loadFile(event) {
    console.log("hi");
    let image = document.getElementById('userImage');
	image.src = URL.createObjectURL(event.target.files[0]);
}

