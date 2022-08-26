function Update(conn, tblName, updatedObj, whereClause){
    conn.query(
        "UPDATE "+tblName+" SET ? WHERE ?",
        [updatedObj, whereClause],
        function (error, results, fields) {
          if (error) throw error;
          console.log(results);
        }
    );
}

exports.Update = Update;