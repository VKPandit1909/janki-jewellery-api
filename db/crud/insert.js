function Insert(conn, tblName, insertObj){
    conn.query(
        "INSERT INTO "+tblName+" SET ?",
        insertObj,
        function (error, results, fields) {
          if (error) throw error;
          console.log(results.insertId);
        }
    );
    // conn.end();
}

exports.Insert = Insert;