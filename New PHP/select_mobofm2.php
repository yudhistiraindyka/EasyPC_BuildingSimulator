<?php
	$hostname ="remotemysql.com";
	$username="xiqpfBQtmG";
	$dbname="xiqpfBQtmG";
	$password="axnkM9eJ5t";
	$usrtable="mobo_fm2";
	$columnname="part_name";
	$columnname2="price";
	
	$con=mysqli_connect($hostname, $username, $password) OR die ("Unable to connect to database");
	$link=mysqli_select_db($con,$dbname);
	$query="select concat($columnname,'-----Rp',$columnname2) from $usrtable order by $columnname";
	$result=mysqli_query($con,$query);
?>

<html>
<head>
<center>
<h1 color="white"> EASY PC </h1>
<h2 color="white"> Select Motherboard </h2>
<hr/>
</head>
<body bgcolor ="cyan">

<select>
<option> --Select Motherboard -- </option>
<?php
		if($result)
		{
			while($row=mysqli_fetch_array($result))
			{
				$partname=$row["$columnname"+"columnname2"];
				echo"<option>$partname<br></option>";
			}
		}
				
?>
</select>
<button>Submit</button>
</center>
</body>
</html>