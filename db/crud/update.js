function Update(conn, tblName, updatedObj, whereClause){
    conn.query(
        "UPDATE "+tblName+" SET ? WHERE ?",
        [updatedObj, whereClause],
        function (err, results, fields) {
          if (err) return({status: "error", error: err});
          console.log(results);
        }
    );
}

exports.Update = Update;