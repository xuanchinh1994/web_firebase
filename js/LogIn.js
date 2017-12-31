function logIn(){
	var userName = document.getElementById("userName").value;
	var passWord = document.getElementById("passWord").value;
		if((userName === "") || (passWord === "")){
			alert("Vui lòng nhập đầy đủ thông tin!");
		}
		else{
			if((userName === "admin") && (passWord === "admin")){
				window.location.href = "process.html"
			}
			else
				alert("Sai mật tài khoản hoặc mật khẩu!");
		}
} 		