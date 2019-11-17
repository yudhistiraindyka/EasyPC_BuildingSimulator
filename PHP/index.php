<html>
<head>
	<title>Test Drop Down</title>
</head>
 
<p>
<form>
Pilih Worker : 
<select name="worker">
	<option>--- Pilih Worker ---</option>
	<?php
	psql_connect("localhost", "root", "root");
	psql_select_db("yudhistira_3");
	$sql = psql_query("SELECT * FROM worker ORDER BY nama ASC");
	if(psql_num_rows($sql) != 0){
		while($row = psql_fetch_assoc($sql)){
			echo '<option>'.$row['nama'].'</option>';
		}
	}
	?>
</select>
<input type="submit" name="submit" value="OK" />
</form>
</p>
 
</html>