function Insert(conn, tblName, insertObj){
    conn.query(
        "INSERT INTO "+tblName+" SET ?",
        insertObj,
        function (err, results, fields) {
          if (err) return({status: "error", error: err});
          console.log(results.insertId);
        }
    );
    // conn.end();
}

exports.Insert = Insert;