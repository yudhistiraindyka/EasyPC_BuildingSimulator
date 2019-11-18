<?php
	$hostname ="localhost";
	$username="root";
	$dbname="easypc";
	$password="";
	$usrtable="am4_proc";
	$columnname="part_name";
	
	$con=mysqli_connect($hostname, $username, $password) OR die ("Unable to connect to database");
	$link=mysqli_select_db($con,$dbname);
	$query="select $columnname from $usrtable";
	$result=mysqli_query($con,$query);
?>

<html>
<head>
<center>
<h1 color="white"> EASY PC </h1>
<h2 color="white"> Select Processor </h2>
<hr/>
</head>
<body bgcolor ="cyan">
<select>
<option> --Select Processor-- </option>
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

</center>
</body>
</html>