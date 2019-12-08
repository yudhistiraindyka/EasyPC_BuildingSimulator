<?php
	$hostname ="remotemysql.com";
	$username="xiqpfBQtmG";
	$dbname="xiqpfBQtmG";
	$password="axnkM9eJ5t";
	$usrtable="mobo_tr4";
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
<hr/>
</head>
<body bgcolor ="cyan">
<form method='POST' action=''>
<h2 color="white">Select Motherboard</h2>
<h4><select name="part">
<option> --Select Motherboard-- </option>
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
<input type="submit" name="submit" value="Submit"/>
</h4>
</form>
<?php
if (isset($_POST['submit'])) {
$part = $_POST['part'];
$sql = $con->query("INSERT INTO sub_mobo (part_name) VALUES ('$part') ");
}
?>
</center>
</body>
</html>
