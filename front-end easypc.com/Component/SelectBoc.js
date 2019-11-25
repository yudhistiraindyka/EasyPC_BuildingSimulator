body {
    margin: 0;
}

.boxCenter {
    display: flex;
    text-align: center;
    justify-content:center; 
    align-items:center;
}

.bar {
    background-color: #6dcff6;  
    color: whitesmoke;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New'
}
 .box { 
    background-color: #6dcff6;
    border-radius: 5px;
    color: white;
    width: 250px;
    height: 80px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 30px;
    align-items: center;
    font-size: 32px;
    font-family: Helvetica;
    text-align: center;
 }

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    bottom: 100%;
    left: 50%;
    margin-left: -60px;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

.ulNavBar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #6dcff6;
}

li {
    float: left;
}

li a {
    display: block;
    color: whitesmoke;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'Courier New';
}

li a:hover {
    background-color: blue;
}

.ulDropDown {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: blue;
}

.icon{
    overflow: hidden;
}

.liDropDown a, .dropbtn {
    display: block;
    padding: 0px 16px;
    color: #6dcff6;
    text-decoration: none;
}

.liDropDown a:hover, .dropdown:hover .dropbtn{
    background-color: blue;
    color: white;
}

.liDropDown.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #6dcff6;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .dropdown-content a:hover {background-color: blue;}
  
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .custom-select {
      position: relative;
      font-family: Helvetica;
  }

  .custom-select select{
      display: none;
  }

  .select-selected {
      background-color: dodgerblue;
  }

  .select-selected:after {
      position: absolute;
      content: "";
      top: 14px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
  }

  .select-selected .select-arrow-active:after {
      border-color: transparent transparent #fff transparent;
      top: 7px;
  }

  .select-items div, .select-selected {
      color: #ffffff;
      padding: 8px 16px;
      border: 1px solid transparent;
      border-color: transparent transparent rgba(0,0,0,0.1) transparent;
      cursor: pointer;
      user-select: none;
  }

  .select-items {
      position: absolute;
      background-color: dodgerblue;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 99;
  }

  .select-hide {
      display: none;
  }

  .select-items div:hover, .same-as-selected {
      background-color: rgba(0,0,0,0.1);
  }