function Delete(conn, tblName, whereClause) {
  conn.query(
    "DELETE FROM " + tblName + " WHERE ?",
    whereClause,
    function (err, rows, fields) {
      if (err) throw err.code;
      console.log("The solution is: ", rows);
    }
  );
}

exports.Delete = Delete;
