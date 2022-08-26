function Delete(conn, tblName, whereClause) {
  conn.query(
    "DELETE FROM " + tblName + " WHERE ?",
    whereClause,
    function (err, rows, fields) {
      if (err) return({status: "error", error: err});
      console.log("The solution is: ", rows);
    }
  );
}

exports.Delete = Delete;
