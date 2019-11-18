<?php
	$hostname ="localhost";
	$username="root";
	$dbname="easypc";
	$password="";
	$usrtable="ram";
	$columnname="ram_name";
	
	$con=mysqli_connect($hostname, $username, $password) OR die ("Unable to connect to database");
	$link=mysqli_select_db($con,$dbname);
	$query="select $columnname from $usrtable";
	$result=mysqli_query($con,$query);
?>

<html>
<head>
<center>
<h1 color="white"> EASY PC </h1>
<h2 color="white"> Select RAM </h2>
<hr/>
</head>
<body bgcolor ="cyan">

<select>
<option> --Select RAM-- </option>
<?php
		if($result)
		{
			while($row=mysqli_fetch_array($result))
			{
				$partname=$row["$columnname"];
				echo"<option>$partname<br></option>";
			}
		}
				
?>
</select>
<button>Submit</button>
</center>
</body>
</html>